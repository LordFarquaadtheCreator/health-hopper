# This file contains additional pretrained models that are generally used for sentiment analysis, to check for performance variation
from textblob import TextBlob
import json
import os
import matplotlib.pyplot as plt

def analyze_sentiment_textblob(json_data, text_output_dir):
    """
    Analyze sentiment of reviews in the provided JSON data using TextBlob, save the output to a text file in text_output_dir,
    and create a graph for polarity and subjectivity that is saved in the current working directory.
    """
    polarity = []
    subjectivity = []
    for company in json_data:
        company_name = company.get("name", "Unknown Company")
        print(f"Company: {company_name}")
        sentiment_output_file_path = os.path.join(text_output_dir, f'{company_name.replace(" ", "_")}_sentiment.txt')
        with open(sentiment_output_file_path, 'w', encoding='utf-8') as output_file:
            if 'reviews' in company:
                for review in company['reviews']:
                    try:
                        snippet = review.get('snippet', '')
                        testimonial = TextBlob(snippet)
                        sentiment = testimonial.sentiment
                        output_file.write(f"Review: {snippet}\nSentiment: {sentiment}\n\n")
                        print(f"Review: {snippet}\nSentiment: {sentiment}\n")
                        polarity.append(sentiment.polarity)
                        subjectivity.append(sentiment.subjectivity)
                    except AttributeError:
                        output_file.write("Skipping a review that is not in the expected format.\n\n")
                        print("Skipping a review that is not in the expected format.")
    
    # Create and save graphs
    plt.figure(figsize=(10, 5))
    plt.subplot(1, 2, 1)
    plt.hist(polarity, bins=20, color='blue')
    plt.title('Polarity Distribution')
    plt.xlabel('Polarity')
    plt.ylabel('Frequency')

    plt.subplot(1, 2, 2)
    plt.hist(subjectivity, bins=20, color='green')
    plt.title('Subjectivity Distribution')
    plt.xlabel('Subjectivity')
    plt.ylabel('Frequency')

    plt.tight_layout()
    plt.savefig('textBlob_analysis.png')  # Save graph in the current working directory
    plt.close()

# Directory for text output
text_output_dir = 'Text_Files'

# Ensure the text output directory exists
os.makedirs(text_output_dir, exist_ok=True)

# Load JSON data from file
json_file_path = 'C:\\Users\\dasa7\\OneDrive\\Desktop\\VS_Android_Projects\\health-hopper\\server\\data-scraping\\data-with-reviews.json'  # Adjust the path as needed
with open(json_file_path, 'r', encoding='utf-8') as f:
    json_data = json.load(f)

# Analyze sentiment and save text outputs
analyze_sentiment_textblob(json_data, text_output_dir)





