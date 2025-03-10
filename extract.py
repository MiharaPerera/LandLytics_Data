import fitz  # PyMuPDF

def extract_formatting(pdf_path):
    """
    Extract formatted text elements from a PDF file.
    
    Args:
        pdf_path (str): Path to the PDF file
        
    Returns:
        dict: Dictionary containing different types of formatted text elements
    """
    # Initialize formatting categories
    formatting_types = {
        "Headers": [],
        "Bold/Italic/Underlined Text": [],
        "Tables": [],
        "Bullet Points": [],
        "Numbered Lists": [],
        "Footnotes/References": []
    }
    
    # Open and process PDF
    doc = fitz.open(pdf_path)
    
    for page in doc:
        blocks = page.get_text("dict")["blocks"]
        for block in blocks:
            if "lines" in block:
                for line in block["lines"]:
                    for span in line["spans"]:
                        text = span["text"].strip()
                        if not text:
                            continue
                            
                        font_size = span["size"]
                        font_flags = span["flags"]
                        
                        # Categorize text based on formatting
                        if font_size > 14:  
                            formatting_types["Headers"].append(text)
                        
                        if font_flags & 2 or font_flags & 1:  # Bold or Italic
                            formatting_types["Bold/Italic/Underlined Text"].append(text)
                        
                        if text.startswith(("-", "•", "●")):
                            formatting_types["Bullet Points"].append(text)
                        
                        if len(text) > 2 and text[:2].isdigit() and text[2] == ".":
                            formatting_types["Numbered Lists"].append(text)
                        
                        if len(text) < 20 and text.isdigit():
                            formatting_types["Footnotes/References"].append(text)
    
    return formatting_types

def print_formatting_results(results):
    """
    Print formatting results in a structured manner.
    
    Args:
        results (dict): Dictionary containing formatting results
    """
    for category, items in results.items():
        print(f"\n{category}:")
        # Filter out duplicates while maintaining order
        unique_items = list(dict.fromkeys(items))
        for item in unique_items:
            print(f" - {item}")

# Example usage
if __name__ == "__main__":
    pdf_path = r"C:\Users\shahn\Downloads\2021 General Regulations.pdf"
    formatting_results = extract_formatting(pdf_path)
    print_formatting_results(formatting_results)
