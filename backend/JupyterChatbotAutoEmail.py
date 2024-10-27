from flask import Flask, jsonify, request # type: ignore
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

def handle_data():
    if request.method == 'POST':
        data = request.json
        return jsonify({'status': 'success', 'received': data}),200
    sample_data = {'key': 'value'}
    return jsonify(sample_data)
if __name__ == '__main__':
    app.run(port=5000)


import pandas as pd
import numpy as np
import os

df = pd.read_excel("C:ENTER PATH HERE FOR EXCEL SPREADSHEET", engine='pyxlsb')

import pandas as pd

file_path = r"C:ENTER PATH HERE FOR EXCEL SPREADSHEET"

def initialize_dataframe():
    return pd.DataFrame(columns=['CATEGORY', 'SUBCATEGORY', 'DESCRIPTION', 'AGE', 'QUANTITY', 'COST', 'TOTAL COST'])


try:
    df = pd.read_excel(file_path, engine='openpyxl')
except FileNotFoundError:
    print("File not found. Creating initial DataFrame.")
    df = initialize_dataframe()

def update_dataframe(category, subcategory, description, age, quantity, cost):
    global df

    new_row = pd.DataFrame({
        'CATEGORY': [category],
        'SUBCATEGORY': [subcategory],
        'DESCRIPTION': [description],
        'AGE': [age],
        'QUANTITY': [quantity],
        'COST': [cost],
        'TOTAL COST': [None] 
    })


    df = pd.concat([df, new_row], ignore_index=True)


    df['COST'] = df['COST'].replace({r'\$': '', '': '0'}, regex=True).astype(float)
    df['QUANTITY'] = df['QUANTITY'].replace('', '0').astype(int)
    df['TOTAL COST'] = df['COST'] * df['QUANTITY']

    # Format the currency
    df['COST'] = df['COST'].map('${:.2f}'.format)
    df['TOTAL COST'] = df['TOTAL COST'].map('${:.2f}'.format)


    df['QUANTITY'] = df['QUANTITY'].astype(str)


def chatbot():
    while True:
        category = input("Enter the Category: ")
        subcategory = input("Enter the Subcategory: ")
        description = input("Enter the Description: ")
        age = input("Enter the Age of the item: ")
        quantity = input("Enter the Quantity: ")
        cost = input("Enter the Cost: ")


        update_dataframe(category, subcategory, description, age, quantity, cost)

        another = input("Would you like to report anything else?(yes/no): ").strip().lower()
        if another != 'yes':
            break

chatbot()

df.to_excel(file_path, index=False, engine='openpyxl')


df_styled = df.style.set_properties(**{'text-align': 'center'}) \
    .set_table_styles({
        'QUANTITY': [{'selector': 'td', 'props': [('text-align', 'right')]}]
    })


df_styled


import webbrowser
import urllib.parse
import os
import re

def is_valid_email(email):
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(regex, email) is not None

sender_email = ''
receiver_email = ''

if is_valid_email(receiver_email):
    subject = 'Automated Insurance Claim'
    email_body = """
    Hello [Recipient's Name],

    I hope this message finds you well. I am writing to formally submit an insurance claim following the recent natural disaster that affected my property. Attached to this email is a spreadsheet detailing the items damaged, which includes the following information for each item:

    Item Name
    Price
    Quantity
    Age of Item
    Total Price
    Please find the spreadsheet attached for your review. I would appreciate your prompt attention to this claim and any further instructions on the next steps in the process.
    
    Thank you for your assistance.

    Best regards,
    [Your Name]
    [Your Address]
    [Your Phone Number]
    [Your Email Address]
    [Policy Number]

    """
    subject = urllib.parse.quote(subject)
    body = urllib.parse.quote(email_body)

    mailto_link = f'mailto:{receiver_email}?subject={subject}&body={body}'

    webbrowser.open(mailto_link)
else:
    print(f"Invalid email address: {receiver_email}")
