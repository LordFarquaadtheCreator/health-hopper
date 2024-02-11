import requests
import json
from dotenv import load_dotenv
import os
load_dotenv()
BASE_URL = "https://serpapi.com/search?engine=google_maps_reviews"

def load_file_contents() -> json:
    with open("data-fixed.json", 'r') as file:
        contents = file.read()
    return json.loads(contents)

def save_to_file(data: json) -> None:
    with open('data-with-reviews.json', 'r+') as file:
        existing_data = json.load(file)
        existing_data.append(data)
        file.seek(0)
        json.dump(existing_data, file, indent=2)

data = load_file_contents()
i = 0
for item in data:
    place_id = item['place_id']
    url = BASE_URL + f"&place_id={place_id}&api_key={os.getenv('SERP_API_KEY')}"

    # if('reviews' in item):
    #     quit()
    # print(item['reviews'] == None)
    try:
        # request = requests.get(url)
        # response = request.json()

        print("Has" + item["reviews"])

        # item['reviews'] = response['reviews']
        # item['topics'] = response['topics']

        # save_to_file(item)
    except:
        request = requests.get(url)
        response = request.json()

        print('Error:', item["formatted_address"])
        try:
            item['reviews'] = response['reviews']
            print("Reviews Got")

        except KeyError:
            item['reviews'] = 'none'

            try:
                item['topics'] = response['topics']
                print("Topics Got")
            except:
                item['topics'] = "none"
                print("No Reviews or Topics")

        save_to_file(item)
        continue
# print('sdfs')