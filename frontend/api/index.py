from flask import Flask, request
from flask_cors import CORS
from transformers import ViTImageProcessor, ViTForImageClassification
from io import BytesIO
from PIL import Image
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/', methods=['GET'])
def home():
    print('Hello, World!')
    return {"message": "Hello World"}

@app.route('/api/about', methods=['GET'])
def about():
    return {"message": "Hello World"}

@app.route("/get_teeth_results", methods=['POST'])
def get_teeth_res() -> list :
  if 'image' not in request.files:
        return jsonify({'error': 'No image part'}), 400

  image = request.files['image']
  img = Image.open(BytesIO(image.read()))

  if img.mode != 'RGB':
      img = img.convert('RGB')
  inputs = feature_extractor(images=img, return_tensors="pt")
  outputs = [check_aligned_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_gum_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_teeth_model(**inputs).logits.softmax(dim=-1).argmax(-1).item()]

  return outputs


@app.route("/api/get_teeth_results", methods=['POST'])
def get_teeth_res() -> list :
  if 'image' not in request.files:
        return jsonify({'error': 'No image part'}), 400

  image = request.files['image']
  img = Image.open(BytesIO(image.read()))

  if img.mode != 'RGB':
      img = img.convert('RGB')
  inputs = feature_extractor(images=img, return_tensors="pt")
  outputs = [check_aligned_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_gum_model(**inputs).logits.softmax(dim=-1).argmax(-1).item(), check_teeth_model(**inputs).logits.softmax(dim=-1).argmax(-1).item()]

  return outputs

if __name__ == "__main__":
  feature_extractor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
  check_aligned_model = ViTForImageClassification.from_pretrained('steven123/Check_Aligned_Teeth')
  check_gum_model = ViTForImageClassification.from_pretrained('steven123/Check_Gum_Teeth')
  check_teeth_model = ViTForImageClassification.from_pretrained('steven123/Check_GoodBad_Teeth')  
  app.run("main:app", host="0.0.0.0", port=8000, reload=True)



