from flask import Flask
import json
from joblib import load
import re
import pandas as pd
import numpy as np
import sklearn
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

def clean_dict(location: dict) -> dict:
    try:
        for review in location["reviews"]:
            for key in ["link", "source", "review_id", "user", "images"]:
                review.pop(key, None)
    except KeyError:
        print("No Reviews Found")
        location["reviews"] = "none"

    for key in ["business_status", "icon", "icon_background_color", "icon_mask_base_uri", "opening_hours"]:
        location.pop(key, None)

    return location

def transform_to_model(location: dict) -> dict:
    location = clean_dict(location)

    # extract zip code
    match = re.search(r'\b\d{5}\b', location.get('formatted_address', ''))
    location['postal_code'] = match.group(0) if match else None
    location.pop("formatted_address", None)

    # drop photos
    location.pop("photos", None)

    # topics to boolean
    location["topics"] = False if location.get("topics") == "no topics" else True

    # extract lat and long
    geometry = location.get('geometry', {})
    location['lat'] = geometry.get('location', {}).get('lat')
    location['lng'] = geometry.get('location', {}).get('lng')
    location.pop("geometry", None)

    # greater than 50 total reviews
    location['greater_than_50'] = location.get('user_ratings_total', 0) > 50

    # has certain keywords in "types"
    types = location.get('types', [])
    location['is_dentist'] = 'dentist' in types
    location['is_health'] = 'health' in types
    location['is_establishment'] = 'establishment' in types
    location['is_doctor'] = 'doctor' in types
    location.pop("types", None)

    # drop other cols
    for key in ["place_id", "plus_code", "reference", "name", "reviews"]:
        location.pop(key, None)

    return location


@app.route("/get_pred_val/<place_ID>")
def get_pred(place_ID: str) -> str:
  with open("data-scraping/data-fixed.json", 'r') as file:
    unfiltered_data = json.loads(file.read())

  location = [obj for obj in unfiltered_data if obj['place_id'] == place_ID][0]
  # print(location)
  lat = location["geometry"]["location"]["lat"]
  lng = location["geometry"]["location"]["lng"]
  print(lat, lng)

  filtered_data = pd.read_csv("./data-scraping/data-with-predicted-value.csv")
  filtered_data.set_index(['lat', 'lng'], inplace=True)

  x = (filtered_data.loc[(lat, lng)])
  return str(x.iloc[0]["predicted_value"])

if __name__ == "__main__":
  app.run(debug=True)