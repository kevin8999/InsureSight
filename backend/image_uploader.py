'''
Uploads images to an image hosting site
'''
from dotenv import load_dotenv, dotenv_values
import os, glob
import base64
import subprocess
import json
import requests

def get_image_paths(file_extension='.jpg', directory='./images'):
    image_list = glob.glob(os.path.join(directory, f"*{file_extension}"))
    return image_list

def image_to_base64(image_file):
    # Converts image data to base64 string
    b64_bytes = base64.b64encode(image_file.read())
    b64_string = b64_bytes.decode()
    return b64_string

def upload_image(API_KEY, b64_file, expiration_time=600):
    #print(b64_file)
    # Uploads image to the IMGBB service using base64 data. IMGBB requires base64 data when uploading from its API
    url = f"https://api.imgbb.com/1/upload?expiration={expiration_time}"
    
    with open(b64_file, 'r') as file:
        b64_string = file.read()

    payload = {
        'key': API_KEY,
        'image': b64_string
    }

    response = requests.post(url, data=payload)

    # Check the response
    if response.status_code == 200:
        print("Upload successful!")
        print("Response:", response.json())
        return True, response.json()
    else:
        print("Upload failed!")
        print("Status Code:", response.status_code)
        print("Response:", response.text)
        return False, response.text

def main():
    load_dotenv()
    IMGBB_API_KEY = os.getenv("IMGBB_API_KEY")

    image_paths = get_image_paths(file_extension='.jpg')

    # Convert each image found in ./images to base64 and save in ./base64-images/
    b64_files = []
    for i, image_path in enumerate(image_paths):
        image_file = open(image_path, 'rb')
        b64_str = image_to_base64(image_file)

        file = f"./base64-images/image_{i+1}.txt"
        with open(file, "w") as base64_file:
            base64_file.write(b64_str)

        b64_files.append(file)

    
    img_urls = []
    # Upload to IMGBB hosting service using base64 strings
    for i, file in enumerate(b64_files):
        print(f"Uploading image {i+1} of {len(b64_files)}")
        upload_succeeded, output = upload_image(IMGBB_API_KEY, file)

        # If image was successfully uploaded, append its display URL to img_urls
        if upload_succeeded:
            url = output["data"]["display_url"]
            img_urls.append(url)
        else:
            print(f"Failed to upload image {i+1}.")
    
    print(f"images: {img_urls}")

if __name__ == '__main__':
    main()