import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = "&key=" + os.getenv('GOOGLE_API_KEY')
URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=dental+in+Antalya+Turkey"

def save_to_file(data):
    with open('data.json', 'r+') as file:
        existing_data = json.load(file)
        existing_data.append(data)
        file.seek(0)
        json.dump(existing_data, file, indent=2)

def get_url():
    next_page_token = ""
    query_url = ""
    for i in range(50):
        query_url = URL + GOOGLE_API_KEY
        query_url += "&pagetoken=" + next_page_token if next_page_token != "" else ""

        response = requests.get(query_url)
        data = response.json()
        next_page_token = data['next_page_token'] if 'next_page_token' in data else ""
        
        save_to_file(data['results'])
get_url()