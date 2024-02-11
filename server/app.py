from flask import Flask
import json
import json
from joblib import load
import re
import pandas as pd
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

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