# this file will be used to extract the keywords that was used to cateogirze the sentiment analysis model, this will utilize a seperate machine learning model of it's own
# this file will be used to extract the keywords that was used to categorize the sentiment analysis model
from sentiment_analysis import all_companies_sentiments, review_snippets_2d
import os

# Function to write the review snippets to a text file
def save_review_snippets(review_snippets, filename):
    with open(filename, "w", encoding='utf-8') as file:
        for company_reviews in review_snippets:
            for review in company_reviews:
                file.write(review + "\n")
            file.write("\n-----\n\n")

# Function to write the all_companies_sentiments to a text file
def save_company_sentiments(company_sentiments, filename):
    with open(filename, "w", encoding='utf-8') as file:
        for company_name, dominant_sentiment, sentiment_counts in company_sentiments:
            file.write(f"Company: {company_name}\nDominant Sentiment: {dominant_sentiment}\nSentiment Counts: {sentiment_counts}\n\n-----\n\n")

# Ensure the directory exists
output_dir = "Text_Files"
os.makedirs(output_dir, exist_ok=True)

# Save the review snippets
review_snippets_filename = os.path.join(output_dir, "review_snippets.txt")
save_review_snippets(review_snippets_2d, review_snippets_filename)

# Save the company sentiments
company_sentiments_filename = os.path.join(output_dir, "company_sentiments.txt")
save_company_sentiments(all_companies_sentiments, company_sentiments_filename)

