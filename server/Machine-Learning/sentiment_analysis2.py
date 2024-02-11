# This file is being used mainly for organizabillity, the sentiment analysis model being used in this script is also from hugging face, it is the sentiment-roberta-large-english model

# Import necessary libraries and functions from sentiment_analysis1.py
from sentiment_analysis1 import analyze_all_companies_sentiments, categorize_sentiment, analyze_review_sentiments  # this way, we won't have to redefine the functions
from transformers import pipeline
import json

# Load JSON data from file
with open('../data-scraping/data-with-reviews.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)

# Initialize the new sentiment analysis pipeline with the specified model
sentiment_pipeline = pipeline('sentiment-analysis', model="siebert/sentiment-roberta-large-english")

# Assuming you have your JSON data loaded as `json_data` like in sentiment_analysis1.py
# You can directly call the analyze_all_companies_sentiments function with the new pipeline
all_companies_sentiments, dominant_sentiment = analyze_all_companies_sentiments(json_data, sentiment_pipeline, 50)

# Print the sentiments for each company (for testing, this prints detailed sentiment counts)
for company_name, dominant_sentiment, sentiment_counts in all_companies_sentiments:
    print(f"{company_name}: {dominant_sentiment}, Detailed Counts: {sentiment_counts}")
