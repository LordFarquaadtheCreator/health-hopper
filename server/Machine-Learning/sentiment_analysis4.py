# implementation of the vader model for sentiment analysis
# sentiment_analysis4.py
# This file uses the VADER Sentiment Analysis model to analyze sentiment of reviews,
# saves the output to a text file, and graphs the compound scores.

# Import necessary libraries
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
import os
import matplotlib.pyplot as plt
import seaborn as sns

def analyze_sentiment_vader(json_data, text_output_dir, graph_output_dir):
    """
    Analyze sentiment of reviews in the provided JSON data using Vader, save the output to a text file in text_output_dir,
    and create a density plot for compound scores saved in graph_output_dir.
    """
    analyzer = SentimentIntensityAnalyzer()
    compound_scores = []

    for company in json_data:
        company_name = company.get("name", "Unknown Company")
        sentiment_output_file_path = os.path.join(text_output_dir, f'{company_name.replace(" ", "_")}_vader_sentiment.txt')
        
        with open(sentiment_output_file_path, 'w', encoding='utf-8') as output_file:
            if 'reviews' in company:
                for review in company['reviews']:
                    try:
                        snippet = review.get('snippet', '')
                        vs = analyzer.polarity_scores(snippet)
                        output_file.write(f"Review: {snippet}\nPolarity Scores: {vs}\n\n")
                        compound_scores.append(vs['compound'])
                    except AttributeError:
                        output_file.write("Skipping a review that is not in the expected format.\n\n")
    
    # Create and save density plot for compound scores
    plt.figure(figsize=(10, 6))
    sns.kdeplot(compound_scores, fill=True, color="r", label="Compound Scores Density")
    plt.title('Compound Scores Density Distribution')
    plt.xlabel('Compound Score')
    plt.ylabel('Density')
    plt.legend()
    
    plt.savefig(os.path.join(graph_output_dir, 'vader_analysis_density.png'))
    plt.close()

# Directories for output
text_output_dir = 'Text_Files'
graph_output_dir = 'visualization'

# Ensure the output directories exist
os.makedirs(text_output_dir, exist_ok=True)
os.makedirs(graph_output_dir, exist_ok=True)

# Load JSON data from file
json_file_path = '../data-scraping/data-with-reviews.json'  # Adjust the path as needed
with open(json_file_path, 'r', encoding='utf-8') as f:
    json_data = json.load(f)

# Analyze sentiment using Vader, save text outputs, and generate density plot
analyze_sentiment_vader(json_data, text_output_dir, graph_output_dir)

