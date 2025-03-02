import cv2
import pytesseract
import pdf2image
import numpy as np

def preprocess_image(image):
    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply adaptive thresholding
    processed = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    
    return processed

def extract_text_from_pdf(pdf_path):
    # Convert PDF to images
    images = pdf2image.convert_from_path(pdf_path)
    extracted_text = ""
    
    for i, image in enumerate(images):
        # Convert PIL image to OpenCV format
        open_cv_image = np.array(image)
        open_cv_image = cv2.cvtColor(open_cv_image, cv2.COLOR_RGB2BGR)
        
        # Preprocess image
        processed_image = preprocess_image(open_cv_image)
        
        # Extract text using Tesseract OCR
        text = pytesseract.image_to_string(processed_image, lang='eng')
        extracted_text += f"\n--- Page {i+1} ---\n{text}"
    
    return extracted_text

# Path to the uploaded PDF file
pdf_path = "2021 General Regulations.pdf"

# Extract text
text_output = extract_text_from_pdf(pdf_path)

# Save extracted text to a file
with open("/mnt/data/extracted_text.txt", "w", encoding="utf-8") as f:
    f.write(text_output)

print("Text extraction completed. Check extracted_text.txt")
