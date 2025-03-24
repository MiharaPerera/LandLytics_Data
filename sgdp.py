import fitz  # PyMuPDF
import re
import pandas as pd
from collections import defaultdict

class PDFStructureExtractor:
    def __init__(self, pdf_path):
        """Initialize with PDF path."""
        self.pdf_path = pdf_path
        self.doc = fitz.open(pdf_path)

    def extract_headers(self, min_font_size=14):
        """Extract headers based on font size."""
        headers = []
        for page in self.doc:
            blocks = page.get_text("dict")["blocks"]
            for block in blocks:
                if "lines" in block:
                    for line in block["lines"]:
                        for span in line["spans"]:
                            if span["size"] >= min_font_size:
                                headers.append(span["text"].strip())
        return headers

    def extract_numbered_clauses(self):
        """Extract numbered clauses and sub-clauses."""
        clauses = []
        pattern = r'^\d+\..*|^\d+\.\d+.*|^\d+\.\d+\s[a-z]\)'  # Matches main clauses and sub-clauses
        
        for page in self.doc:
            text = page.get_text()
            for line in text.split('\n'):
                if re.match(pattern, line.strip()):
                    clauses.append(line.strip())
        return clauses

    def extract_defined_terms(self):
        """Extract terms in quotation marks or with special formatting."""
        terms = []
        for page in self.doc:
            blocks = page.get_text("dict")["blocks"]
            for block in blocks:
                if "lines" in block:
                    for line in block["lines"]:
                        for span in line["spans"]:
                            text = span["text"].strip()
                            # Check for quoted terms or terms with special formatting
                            if (text.startswith('"') and text.endswith('"')) or \
                               (span["flags"] & 2):  # Check for bold text
                                terms.append(text)
        return terms

    def extract_measurements(self):
        """Extract measurements with units."""
        measurements = []
        pattern = r'\d+(?:\.\d+)?\s*(?:m|mm|cm|km|m²|sqm)\b'
        
        for page in self.doc:
            text = page.get_text()
            found = re.finditer(pattern, text, re.IGNORECASE)
            measurements.extend(match.group() for match in found)
        return measurements

    def extract_bullet_points(self):
        """Extract bullet points."""
        bullets = []
        bullet_patterns = [r'^\s*[•\-]\s+.*', r'^\s*\(\w+\)\s+.*']
        
        for page in self.doc:
            text = page.get_text()
            for line in text.split('\n'):
                for pattern in bullet_patterns:
                    if re.match(pattern, line.strip()):
                        bullets.append(line.strip())
                        break
        return bullets

    def extract_tables(self):
        """Extract tables based on structure recognition."""
        tables = []
        for page in self.doc:
            # Basic table detection based on regular spacing and alignment
            blocks = page.get_text("dict")["blocks"]
            potential_table = []
            current_row = []
            last_y = None
            
            for block in blocks:
                if "lines" in block:
                    for line in block["lines"]:
                        y = line["bbox"][1]  # y-coordinate
                        if last_y is not None and abs(y - last_y) > 5:  # New row
                            if current_row:
                                potential_table.append(current_row)
                                current_row = []
                        current_row.extend(span["text"] for span in line["spans"])
                        last_y = y
            
            if len(potential_table) > 1 and any(len(row) > 1 for row in potential_table):
                tables.append(potential_table)
        
        return tables

    def extract_all(self):
        """Extract all document structures."""
        return {
            'headers': self.extract_headers(),
            'numbered_clauses': self.extract_numbered_clauses(),
            'defined_terms': self.extract_defined_terms(),
            'measurements': self.extract_measurements(),
            'bullet_points': self.extract_bullet_points(),
            'tables': self.extract_tables()
        }

def save_to_excel(extracted_data, output_path):
    """Save extracted data to Excel with multiple sheets."""
    with pd.ExcelWriter(output_path) as writer:
        for key, data in extracted_data.items():
            if key != 'tables':  # Handle non-table data
                df = pd.DataFrame(data, columns=[key])
                df.to_excel(writer, sheet_name=key, index=False)
            else:  # Handle tables separately
                for i, table in enumerate(data):
                    df = pd.DataFrame(table)
                    df.to_excel(writer, sheet_name=f'table_{i+1}', index=False)

# Example usage
if __name__ == "__main__":
    pdf_path = r"C:\Users\shahn\Downloads\2021 General Regulations.pdf"
    output_excel = "extracted_structures.xlsx"
    
    # Extract all structures
    extractor = PDFStructureExtractor(pdf_path)
    extracted_data = extractor.extract_all()
    
    # Save to Excel
    save_to_excel(extracted_data, output_excel)
    
    # Print summary
    for structure, items in extracted_data.items():
        print(f"\n{structure.upper()}:")
        if structure != 'tables':
            for item in items[:5]:  # Print first 5 items as example
                print(f"- {item}")
        else:
            print(f"Found {len(items)} tables")
