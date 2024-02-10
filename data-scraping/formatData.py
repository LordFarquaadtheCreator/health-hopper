import json

def format_business_data(file_path):
    try:
        with open(file_path, 'r') as file:
            businesses = json.load(file)
            formatted_data = []

            for business in businesses:
                formatted_business = {
                    "business_status": business["business_status"],
                    "formatted_address": business["formatted_address"],
                    "geometry": business["geometry"],
                    "icon": business["icon"],
                    "name": business["name"],
                    "opening_hours": business.get("opening_hours", {}),
                    "photos": business.get("photos", []),
                    "place_id": business["place_id"],
                    "rating": business["rating"],
                    "types": business["types"],
                    "user_ratings_total": business["user_ratings_total"],
                    "reviews": business.get("reviews", []),
                    "topics": business.get("topics", [])
                }
                formatted_data.append(formatted_business)

            return formatted_data
    except FileNotFoundError:
        print("File not found. Please ensure 'data-with-reviews.json' is in the correct directory.")
    except json.JSONDecodeError:
        print("Error decoding JSON. Please check the file format.")

def save_formatted_data(formatted_data, output_file_path):
    try:
        with open(output_file_path, 'w') as file:
            json.dump(formatted_data, file, indent=4)
        print(f"Data successfully saved to {output_file_path}")
    except IOError:
        print(f"Could not write data to {output_file_path}")


# Example usage
file_path = './data-with-reviews.json'
output_file_path = './formatted_data.json'
formatted_businesses = format_business_data(file_path)

if formatted_businesses:
    save_formatted_data(formatted_businesses, output_file_path)
