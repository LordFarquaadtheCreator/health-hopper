from flask import Flask, request
import json
import json
from joblib import load
import re
import pandas as pd
from transformers import ViTImageProcessor, ViTForImageClassification
import requests
from PIL import Image
from io import BytesIO
import requests
import os
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/get_teeth_results")
def get_teeth_res() -> list:
  # response = requests.get(path_to_image)
  image = request.files['image']
  img = Image.open(BytesIO(image))

  inputs = feature_extractor(images=img, return_tensors="pt")
  outputs = [check_aligned_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_gum_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_teeth_model(**inputs).logits.softmax(dim=-1).argmax(-1).item()]

  return outputs

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
  # app.run(debug=True)
  feature_extractor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
  check_aligned_model = ViTForImageClassification.from_pretrained('steven123/Check_Aligned_Teeth')
  check_gum_model = ViTForImageClassification.from_pretrained('steven123/Check_Gum_Teeth')
  check_teeth_model = ViTForImageClassification.from_pretrained('steven123/Check_GoodBad_Teeth')


  print(get_teeth_res())