'''
Uploads images to an image hosting site
'''
from dotenv import load_dotenv, dotenv_values
import os
import glob
import base64
import subprocess
import json

def get_image_paths(file_extension='.jpg', directory='./images'):
    image_list = glob.glob(os.path.join(directory, f"*{file_extension}"))
    return image_list

def image_to_base64(image_file):
    # Converts image data to base64 string
    b64_bytes = base64.b64encode(image_file.read())
    b64_string = b64_bytes.decode()
    return b64_string

def upload_image(API_KEY, b64_string, expiration_time=60):
    # Uploads image to the IMGBB service using base64 data. IMGBB requires base64 data when uploading from its API
    command = f"curl --location --request POST 'https://api.imgbb.com/1/upload?expiration={str(expiration_time)}&key={API_KEY}' --form 'image={b64_string}'"
    
    data = subprocess.check_output(command, shell=True, text=True)

    # Clean data to make it easier to parse the URL later
    data = data.replace("\n", "")
    data = data.replace("\\", "")
    data = data.replace("  ", "")

    # Return JSON data from IMGBB
    return json.loads(data)

def main():
    load_dotenv()
    IMGBB_API_KEY = os.getenv("IMGBB_API_KEY")

    image_paths = get_image_paths(file_extension='.jpg')

    # Convert each image found in ./images to base64
    b64_strings = []
    for image_path in image_paths:
        image_file = open(image_path, 'rb')
        b64_str = image_to_base64(image_file)

        b64_strings.append(b64_str)
    
    img_urls = []
    # Upload to IMGBB hosting service using base64 strings
    for i, string in enumerate(b64_strings):
        print(f"Uploading image {i+1} of {len(b64_strings)}")
        output = upload_image(IMGBB_API_KEY, string)

        # If image was successfully uploaded, append its display URL to img_urls
        if output["success"] == True:
            url = output["data"]["display_url"]
            img_urls.append(url)
    
    print(img_urls)

if __name__ == '__main__':
    main()