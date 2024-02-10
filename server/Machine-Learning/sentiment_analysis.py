import json
from transformers import pipeline

# note in python, the public functions are automatically exported while private functions start with an underline instead

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

# Implementation of pretrained model
sentiment_pipeline = pipeline('sentiment-analysis')  # since I didn't supply any specific model, it will  use the default model instead


# before we feed the input into the model, we will need to split up the text
# option 2: Split and Aggregrate approach --> split the review into smaller segments that each fit within the model's maximum sequence length. Then analyze each segment seperately and aggregrate the results to get a final sentiment for the review. This approach preserves all information but requires a method to aggregarate sentiment scores meaningfully.

# the following was the old analyze_review_sentiments that only had 3 default categories: 'POSITIVE', 'NEGATIVE', 'NEUTRAL'
#def analyze_review_sentiments(reviews):
    #all_sentiments = []
    #for review in reviews:
        #parts = [review[i:i+512] for i in range(0, len(review), 512)]
        #sentiments = sentiment_pipeline(parts)
        #all_sentiments.extend(sentiments)
    #return all_sentiments
    
# we will need to first define the categorize_sentiment
def categorize_sentiment(sentiment_result):
    """
    Categorizes sentiment into five categories based on score/confidence.
    This is a simplified example.
    """
    label = sentiment_result['label']   # extract the label from the result of the model
    score = sentiment_result['score']   # extract the score from the result of the model
    
    if label == 'NEGATIVE':
        return "Very Negative" if score > 0.85 else "Negative"
    elif label == 'POSITIVE':
        return "Very Positive" if score > 0.85 else "Positive"
    else:
        return "Neutral"
    
# the following is the new analuze_review_sentiments function that takes into considertaion the additional sentiments
def analyze_review_sentiments(reviews):
    all_sentiments = []
    for review in reviews:
        parts = [review[i:i+512] for i in range(0, len(review), 512)]
        sentiments = sentiment_pipeline(parts)
        # Apply categorization
        categorized_sentiments = [categorize_sentiment(sentiment) for sentiment in sentiments]
        all_sentiments.extend(categorized_sentiments)
    return all_sentiments

def aggregate_sentiments(sentiments):
    sentiment_counts = {"POSITIVE": 0, "NEGATIVE": 0, "NEUTRAL": 0}
    for sentiment in sentiments:
        sentiment_counts[sentiment['label']] += 1
    majority_sentiment = max(sentiment_counts, key=sentiment_counts.get)
    return majority_sentiment

'''  --> this is commented out since we will not be working with the aggregate_sentiments and instead use the categorize_sentiment instead
def analyze_all_companies_sentiments(json_data, limit=50):
    company_sentiments = []
    for index, company in enumerate(json_data):
        if index >= limit:  # Limit the number of companies processed
            break
        company_name = company.get("name", "Unknown Company")
        reviews = [review.get('snippet', '') for review in company.get('reviews', []) if review.get('snippet')]
        if reviews:
            all_sentiments = analyze_review_sentiments(reviews)  # calls on the analyze_review_sentiments if reviews exist
            aggregated_sentiment = aggregate_sentiments(all_sentiments)   # cateogirzes the aggregate sentiments function
            company_sentiments.append((company_name, aggregated_sentiment))
        else:
            company_sentiments.append((company_name, "No Reviews"))
    return company_sentiments

# Now, when calling analyze_all_companies_sentiments, it will only process the first 50 companies
all_companies_sentiments = analyze_all_companies_sentiments(json_data, 50)

# Print or process the sentiments for each company
for company_name, sentiment in all_companies_sentiments:
    print(f"{company_name}: {sentiment}")
    '''
    
# define the new analyze_all_companies_sentiment function
def analyze_all_companies_sentiments(json_data, sentiment_pipeline, limit=50):  # by default the comapny default is set to 50
    company_sentiments = []
    for index, company in enumerate(json_data):
        if index >= limit:  # Limit the number of companies processed
            break
        company_name = company.get("name", "Unknown Company")
        reviews = [review.get('snippet', '') for review in company.get('reviews', []) if review.get('snippet')]
        if reviews:
            all_sentiments = analyze_review_sentiments(reviews)  # This now directly uses categorize_sentiment (cateogirze_sentiment is being called within the analyze_review_sentiments function)
            # Count occurrences of each sentiment category
            sentiment_counts = {"Very Positive": 0, "Positive": 0, "Neutral": 0, "Negative": 0, "Very Negative": 0}
            for sentiment in all_sentiments:
                sentiment_counts[sentiment] += 1
            # Optionally, determine the dominant sentiment based on counts or just return the counts
            dominant_sentiment = max(sentiment_counts, key=sentiment_counts.get)  # this will provide us with insight into the dominant sentiment of first specified data
            company_sentiments.append((company_name, dominant_sentiment, sentiment_counts))
        else:
            company_sentiments.append((company_name, "No Reviews"))
    return company_sentiments


# Call the function to analyze all companies' sentiments
all_companies_sentiments = analyze_all_companies_sentiments(json_data, sentiment_pipeline, 50)

# Print the sentiments for each company (for testing, this prints detailed sentiment counts)
for company_name, dominant_sentiment, sentiment_counts in all_companies_sentiments:
    print(f"{company_name}: {dominant_sentiment}, Detailed Counts: {sentiment_counts}")
# refer to app.py to see the function call that is being made
#sentiment_pipeline(data)  # feed the data to the sentiment pipeline

