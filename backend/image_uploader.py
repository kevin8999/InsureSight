'''
Uploads images to an image hosting site
'''
from dotenv import load_dotenv, dotenv_values
import os
import glob
import base64

def get_image_paths(file_extension='.jpg', directory='./images'):
    image_list = glob.glob(os.path.join(directory, f"*{file_extension}"))
    return image_list

def image_to_base64(image_file):
    # Converts image data to base64 string
    b64_bytes = base64.b64encode(image_file.read())
    b64_string = b64_bytes.decode()
    return b64_string

def upload_image(API_KEY, b64_string):
    # Uploads image to the IMGBB service using base64
    pass

def main():
    load_dotenv()
    IMGBB_API_KEY = os.getenv("IMGBB_API_KEY")

    image_paths = get_image_paths()
    b64_strings = []

    # Convert each image found in directory to base64
    for image_path in image_paths:
        image_file = open(image_path, 'rb')
        b64_str = image_to_base64(image_file)

        b64_strings.append(b64_str)
    

if __name__ == '__main__':
    main()