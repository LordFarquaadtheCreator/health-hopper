import matplotlib.pyplot as plt
import os
from sentiment_analysis import all_companies_sentiments  # Ensure this import works based on your project structure

# Function to visualize sentiment counts for individual companies
def visualize_individual_sentiments(all_companies_sentiments, visualization_dir):
    for company_name, dominant_sentiment, sentiment_counts in all_companies_sentiments:
        labels = sentiment_counts.keys()
        counts = sentiment_counts.values()

        plt.figure(figsize=(10, 6))
        plt.bar(labels, counts, color=['blue', 'green', 'grey', 'red', 'purple'])
        plt.title(f'Sentiment Analysis for {company_name}')
        plt.xlabel('Sentiment')
        plt.ylabel('Count')
        plt.xticks(rotation=45)
        plt.tight_layout()

        plot_file_name = os.path.join(visualization_dir, f"{company_name.replace(' ', '_').replace('/', '_')}_sentiment.png")
        plt.savefig(plot_file_name)
        plt.close()

# Updated function to visualize combined sentiments across all companies using a pie chart
def visualize_combined_sentiments(all_companies_sentiments, visualization_dir):
    combined_sentiment_counts = {"Very Positive": 0, "Positive": 0, "Neutral": 0, "Negative": 0, "Very Negative": 0}

    for _, _, sentiment_counts in all_companies_sentiments:
        for sentiment, count in sentiment_counts.items():
            combined_sentiment_counts[sentiment] += count

    labels = combined_sentiment_counts.keys()
    counts = combined_sentiment_counts.values()
    colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue', 'purple']  # Colors for the pie chart segments

    # Calculate the percentage for each sentiment category
    total = sum(counts)
    percentages = [f"{(count/total)*100:.1f}%" for count in counts]

    # Combine the labels and percentages for the legend
    legend_labels = [f"{label}: {percentage}" for label, percentage in zip(labels, percentages)]

    plt.figure(figsize=(10, 8))
    plt.pie(counts, colors=colors, startangle=140)
    plt.legend(labels=legend_labels, loc='lower right')  # Include percentages in the legend
    plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.title('Combined Sentiment Analysis Across 50 Companies')

    combined_plot_file_name = os.path.join(visualization_dir, "combined_sentiment_analysis.png")
    plt.savefig(combined_plot_file_name)
    plt.close()

# Main function to handle visualization
def visualize_sentiments(all_companies_sentiments):  # calls on both the functions: visualize_individual_sentiments and visualize_combined_sentiments
    visualization_dir = 'visualization'
    if not os.path.exists(visualization_dir):
        os.makedirs(visualization_dir)

    # Visualize sentiments for individual companies
    visualize_individual_sentiments(all_companies_sentiments, visualization_dir)
    
    # Visualize combined sentiments across all companies using a pie chart
    visualize_combined_sentiments(all_companies_sentiments, visualization_dir)

# Call the main visualization function
visualize_sentiments(all_companies_sentiments)