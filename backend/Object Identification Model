import tensorflow as tf
import tensorflow_hub as hub
from PIL import Image, ImageDraw, ImageFont

import torch
from torchvision.models.detection import fasterrcnn_resnet50_fpn
from torchvision.transforms import functional as F

import argparse

class Data:
    def __init__(self):
        # Data to label model's predictions
        data = [
            [1, "person"],
            [2, "bicycle"],
            [3, "car"],
            [4, "motorcycle"],
            [5, "airplane"],
            [6, "bus"],
            [7, "train"],
            [8, "truck"],
            [9, "boat"],
            [10, "traffic light"],
            [11, "fire hydrant"],
            [12, "street sign"],
            [13, "stop sign"],
            [14, "parking meter"],
            [15, "bench"],
            [16, "bird"],
            [17, "cat"],
            [18, "dog"],
            [19, "horse"],
            [20, "sheep"],
            [21, "cow"],
            [22, "elephant"],
            [23, "bear"],
            [24, "zebra"],
            [25, "giraffe"],
            [26, "hat"],
            [27, "backpack"],
            [28, "umbrella"],
            [29, "shoe"],
            [30, "eye glasses"],
            [31, "handbag"],
            [32, "tie"],
            [33, "suitcase"],
            [34, "frisbee"],
            [35, "skis"],
            [36, "snowboard"],
            [37, "sports ball"],
            [38, "kite"],
            [39, "baseball bat"],
            [40, "baseball glove"],
            [41, "skateboard"],
            [42, "surfboard"],
            [43, "tennis racket"],
            [44, "bottle"],
            [45, "plate"],
            [46, "wine glass"],
            [47, "cup"],
            [48, "fork"],
            [49, "knife"],
            [50, "spoon"],
            [51, "bowl"],
            [52, "banana"],
            [53, "apple"],
            [54, "sandwich"],
            [55, "orange"],
            [56, "broccoli"],
            [57, "carrot"],
            [58, "hot dog"],
            [59, "pizza"],
            [60, "donut"],
            [61, "cake"],
            [62, "chair"],
            [63, "couch"],
            [64, "potted plant"],
            [65, "bed"],
            [66, "mirror"],
            [67, "dining table"],
            [68, "window"],
            [69, "desk"],
            [70, "toilet"],
            [71, "door"],
            [72, "tv"],
            [73, "laptop"],
            [74, "mouse"],
            [75, "remote"],
            [76, "keyboard"],
            [77, "cell phone"],
            [78, "microwave"],
            [79, "oven"],
            [80, "toaster"],
            [81, "sink"],
            [82, "refrigerator"],
            [83, "blender"],
            [84, "book"],
            [85, "clock"],
            [86, "vase"],
            [87, "scissors"],
            [88, "teddy bear"],
            [89, "hair drier"],
            [90, "toothbrush"],
            [91, "hair brush"]
        ]
    
    
    
        # Creating the dictionary
        self.label_mapping = {item[0]: item[1] for item in data}

# Runs inference
def run_inference(image, model):
    # Convert the image to a tensor
    image_tensor = F.to_tensor(image).unsqueeze(0)  # Add batch dimension
    
    # Run inference
    with torch.no_grad():
        predictions = model(image_tensor)
    return predictions


def main(file, index, output):
    from os import getcwd
    model_path = getcwd() + '\\' + ''

    model = fasterrcnn_resnet50_fpn(pretrained=True)
    
    # Load a pre-trained Faster R-CNN model
    #infer = model.signatures['serving_default']
    model.eval()  # Set the model to evaluation mode

    data = Data()
    label_mapping = data.label_mapping

    # Get image
    image_path = getcwd() + "\\" + "example.jpg"
    
    # Convert to PIL for model
    pil_image = Image.open(image_path)

    # Make predictions using model
    predictions = run_inference(pil_image, model)

    # Extract predictions
    boxes = predictions[0]['boxes']
    labels = predictions[0]['labels']
    scores = predictions[0]['scores']

    # Create drawer
    draw = ImageDraw.Draw(pil_image)

    # Loop through predictions and draw boxes and labels
    detected_boxes, detected_labels, detected_scores = [], [], []
    
    for box, label, score in zip(boxes, labels, scores):
        # Skip all scores under 0.5
        if score.item() < 0.5:
            continue
            
        # Convert tensor to numpy and then to int
        box = box.numpy().astype(int)
        label = label.item()  # Convert tensor to int
        score = score.item()  # Convert tensor to float
    
        detected_boxes.append(box)
        detected_labels.append(label)
        detected_scores.append(score)
    
        # Draw the bounding box
        draw.rectangle([box[0], box[1], box[2], box[3]], outline='red', width=3)
        
        # Draw the label and score
        text = f"{label_mapping[label]}, Score: {score:.2f}"
        text_size = draw.textbbox((0,0), text=text)  # Get text size for positioning
        draw.rectangle([box[0], box[1], box[0] - text_size[0], box[1] + text_size[1]], fill='red')  # Background for text
        draw.text((box[0], box[1] - text_size[1]), text, fill='white')  # Draw text
    
    # Display the image with koverlays
    pil_image.show()
    
    # Optionally, save the image with overlays
    output_file_name = output + str(index) + ".jpg"
    pil_image.save(output_file_name)

    # List of names of things the model found
    detected_label_names = [label_mapping[label] for label in detected_labels]
    with open("detected_items.txt") as file:
        file.writeline()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Detects objects in image using pre-loaded ML model.")
    parser.add_argument("--file", type=str, help="Name of image file to load")
    parser.add_argument("--index", type=int, help="Index of image (default: 1)", default=1)
    parser.add_argument("--output", type=str, help="Name of output file. Saves as jpg. (default: image_overlay{i}.jpg", default="image_overlay.jpg")

    args = parser.parse_args()
    
    main(args.file, args.index, args.output)
