import json

def load_file_contents():
    with open("data.json", 'r') as file:
        contents = file.read()
    return contents

data = json.loads(load_file_contents())
merged_data = {}

flattened_data = [item for sublist in data for item in sublist]
print(flattened_data)

def save_to_file(data):
    with open('data-fixed.json', 'r+') as file:
        existing_data = json.load(file)
        existing_data.append(data)
        file.seek(0)
        json.dump(existing_data, file, indent=2)

save_to_file(flattened_data)