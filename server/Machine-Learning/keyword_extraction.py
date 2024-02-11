# this file will be used to extract the keywords that was used to cateogirze the sentiment analysis model, this will utilize a seperate machine learning model of it's own
# this file will be used to extract the keywords that was used to categorize the sentiment analysis model
from sentiment_analysis import all_companies_sentiments, review_snippets_2d
import os
import yake

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

print(type(review_snippets_2d[0])) # break it down into a single array to see what the dimensionality is --> outputs list
print(type(review_snippets_2d))  # output: list
print(type(all_companies_sentiments[0]))  # output: tuple
print(type(all_companies_sentiments))   # output: list
print(review_snippets_2d[0])  # outputs an array of strings with each element (strings) being the reviews corresponding to the company

'''  --> avoid this, 3 nested for loops will make the program way too slow and the program isn't guranteed to run
kw_extractor = yake.KeywordExtractor()
for review in review_snippets_2d:
    for element in review:
        doc = element  # this will save the string sentence
        # feed the doc as input to the kw_extractor
        keywords = kw_extractor.extract_keywords(doc)
        for kw in keywords:
            print(kw)  # this will print out the keyword
            
'''

# use a seperate appraoch, flatten the array using list_comprehension and iterate through it
def save_to_file(content, filename):   # define a function to save to the file, function accepts two parameter, name of the file and the content that should be written to the file
    with open(filename, "w", encoding='utf-8') as file:
        file.write(content)

# Ensure the directory exists
output_dir = "Text_Files"
os.makedirs(output_dir, exist_ok=True)

# Flatten the 2D list of reviews into a 1D list
flat_review_list = [review for company_reviews in review_snippets_2d for review in company_reviews]

# Extract keywords from each review
kw_extractor = yake.KeywordExtractor()
keywords_from_reviews = [kw_extractor.extract_keywords(review) for review in flat_review_list]

# Process the keywords to string for saving into file
keywords_content = "\n".join(f"{kw[0]}: {kw[1]}" for review_keywords in keywords_from_reviews for kw in review_keywords)

# Save the keywords to a file
keywords_filename = os.path.join(output_dir, "keywords.txt")   # this will save the output onto keywords.txt file
save_to_file(keywords_content, keywords_filename)  # call on the function save_to_file passing the two arguments


        
    




