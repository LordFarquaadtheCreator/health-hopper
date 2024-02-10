# this file will be used to extract the keywords that was used to cateogirze the sentiment analysis model, this will utilize a seperate machine learning model of it's own

# the following is the skeletal structure of the keyword extraction
import spacy

# import the JSON data, same as how the data was imported in sentiment_analysis.py
# Load JSON data from file
with open('C:\\Users\\dasa7\\OneDrive\\Desktop\\VS_Android_Projects\\health-hopper\\data-scraping\\data-with-reviews.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
    
# Initialize a list to hold lists of review snippets for each company
review_snippets_2d = []

# Extract review snippets and store them in the 2D list
for company in json_data:
    # Initialize a list to hold review snippets for the current company
    company_reviews = []
    
    # Check if the 'reviews' key exists and iterate over reviews if it does
    if 'reviews' in company:
        for review in company['reviews']:
            try:
                # Attempt to safely extract the snippet
                snippet = review.get('snippet')
                if snippet:  # Check if snippet is not None
                    company_reviews.append(snippet)
            except AttributeError:
                # Handle the case where review is not a dictionary as expected
                # For example, you can print a warning or pass
                print("Skipping a review that is not in the expected format.")
            
    # Append the company's reviews to the 2D list, only if there are reviews
    if company_reviews:
        review_snippets_2d.append(company_reviews)

# Print to see if it works as intended
print(review_snippets_2d)

nlp = spacy.load("en_core_web_sm")  # load the text extraction model

def extract_keywords(text):
    '''
        Extracts keywords for a given text using spaCy
    '''
    doc = nlp(text)  # feed the text paramter as input to the nlp model
    keywords = [token.text for token in doc if token.is_stop != True and token.is_punct != True]
    return keywords