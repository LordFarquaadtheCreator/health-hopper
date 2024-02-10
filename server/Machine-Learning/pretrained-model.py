# note: need to extract the data from the json file and feed it into the model
import pandas as pd 
import json 
from transformers import pipeline  # default model that can be used
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# reading json data from file
with open('data-scraping\data-fixed.json') as f:
    json_data = json.load(f)
        
# converting JSON data data to a pandas dataframe
df = pd.read_json(json_data)

# use the pandas function to conver the data to csv file
df.to_csv("output.csv", index=False)

# implementation of pretrained model
sentiment_pipeline = pipeline('sentiment-analysis')

data = NULL  # this is the data we will be pulling from json and save it as an array of strings
sentiment_pipeline(data)  # feed the data to the sentiment pipeline



