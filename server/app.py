from flask import Flask
import json
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/<placeID>")
def get_pred(place_ID: str) -> float:
  # get place information from database
  with open("data-scraping/data-fixed.json", 'r') as file:
    data = file.read()

  location = list(filter(lambda business: business['place_id'] == 'place_ID', data))
  # location = [obj for obj in data if obj['place_id'] == place_ID]
  print(location)

  # prompt model to interpret place information
  # return model's interpretation
  return 1.0

if __name__ == "__main__":
  # app.run()
  get_pred("ChIJy2pUY-OawxQRbeMs0QmHZ-w")