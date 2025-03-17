import torch
import torchvision.transforms as T
import gradio as gr
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import torchvision.models.detection as detection

# Load the trained model
model = detection.fasterrcnn_resnet50_fpn(pretrained=False)  # Define the model architecture
model.load_state_dict(torch.load("model.pth", map_location=torch.device("cpu")))  # Load weights
model.eval()  # Set to evaluation mode

# Define class labels (Update these based on your dataset)
LABELS = {1: "Road", 2: "Land", 3: "Building"}
COLORS = {"Road": "red", "Land": "blue", "Building": "green"}

# Preprocessing function
def preprocess_image(image):
    transform = T.Compose([T.ToTensor()])
    return transform(image).unsqueeze(0)  # Add batch dimension

# Inference function
def detect_objects(image):
    img_tensor = preprocess_image(image)

    with torch.no_grad():
        prediction = model(img_tensor)[0]  # Get the first (and only) prediction

    # Extract boxes, labels, and scores
    boxes = prediction['boxes'].cpu().numpy()
    labels = prediction['labels'].cpu().numpy()
    scores = prediction['scores'].cpu().numpy()

    # Draw bounding boxes
    draw = ImageDraw.Draw(image)

    # Use a larger font if available
    try:
        font = ImageFont.truetype("arial.ttf", 20)  # Change the font and size if necessary
    except IOError:
        font = ImageFont.load_default()

    for i in range(len(boxes)):
        if scores[i] > 0.5:  # Confidence threshold
            box = boxes[i]
            label = LABELS.get(labels[i], "Unknown")
            color = COLORS.get(label, "yellow")

            # Draw rectangle
            draw.rectangle([box[0], box[1], box[2], box[3]], outline=color, width=3)

            # Draw label background for clarity
            text = f"{label}: {scores[i]:.2f}"

            # Use font.getbbox() to calculate text size
            bbox = font.getbbox(text)
            text_width, text_height = bbox[2] - bbox[0], bbox[3] - bbox[1]
            text_position = (box[0], box[1] - text_height)

            # Draw background for text (make sure text doesn't overlap the box)
            draw.rectangle([text_position[0], text_position[1], text_position[0] + text_width, text_position[1] + text_height], fill=color)

            # Draw text
            draw.text(text_position, text, font=font, fill="white")

    return image

# Gradio Interface
demo = gr.Interface(fn=detect_objects, inputs=gr.Image(type="pil"), outputs="image")
demo.launch()
