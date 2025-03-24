import re

# Load the document text
file_path = "2021 General Regulations.pdf"
with open(file_path, "rb") as file:
    raw_text = file.read().decode(errors='ignore')  # Decode ignoring errors

# Define regex patterns
patterns = {
    "gazette_numbers": r"Gazette No\. \d+/\d+ dated \d{2}\.\d{2}\.\d{4}",
    "official_names": r"([A-Z][a-z]+(?:\s[A-Z][a-z]+)*),\s+(Minister of [A-Za-z\s]+)",
    "regulation_numbers": r"Section\s\d+\s(?:of the [A-Za-z\s]+)",
    "development_conditions": r"Any (residential|non-residential) development that exceeds:\s*\d{1,4}\s*m2",
    "application_fees": r"rupees\s[\w\s]+\s\(Rs\.\s\d{1,3}(?:,\d{3})*/-\)",
    "height_restrictions": r"\d+(\.\d+)?\s*m\s+in\s+height"
}

# Extract and display results
extracted_data = {}
for key, pattern in patterns.items():
    matches = re.findall(pattern, raw_text)
    extracted_data[key] = matches

# Print extracted results
for category, matches in extracted_data.items():
    print(f"\n{category.upper()}:")
    for match in matches:
        print(match)
