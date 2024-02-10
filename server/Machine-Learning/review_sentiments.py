import json
import re

def append_to_json(data: str) -> None:
    try:
        with open('sentiment.json', 'r') as f:
            existing_data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        existing_data = []

    existing_data.append(data)

with open('./Text_Files/company_sentiments.txt', 'r') as f:
    data = f.read()

# print(data)
pattern = r"Company: (.*?)\nDominant Sentiment: (.*?)\nSentiment Counts: (.*?)\n\n-----"

matches = re.findall(pattern, data, re.DOTALL)

for match in matches:
    company = match[0]
    dominant_sentiment = match[1]
    sentiment_counts = eval(match[2])
    append_to_json(f"Company: {company}, Dominant Sentiment: {dominant_sentiment}, Sentiment Counts: {sentiment_counts}")