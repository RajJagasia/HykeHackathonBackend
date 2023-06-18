import json

# Load the JSON data
data = [
    {
        "_id": "648eb64665202c7eb5ea0a91",
        "gender": "Men",
        "category": "Apparel",
        "type": "Shirts",
        "color": [
            "Navy Blue"
        ],
        "title": "Turtle Check Men Navy Blue Shirt",
        "price": 124,
        "id": 15970,
        "image": "../assets/product/21379.jpg",

        "size": "M"
    },
    {
        "_id": "648eb64665202c7eb5ea0a92",
        "gender": "Men",
        "category": "Apparel",
        "type": "Jeans",
        "color": [
            "Blue"
        ],
        "title": "Peter England Men Party Blue Jeans",
        "price": 16,
        "id": 39386,
        "image": "../assets/product/21379.jpg",
        "size": "XXL"
    },
    {
        "_id": "648eb64665202c7eb5ea0a94",
        "gender": "Men",
        "category": "Apparel",
        "type": "Track Pants",
        "color": [
            "Black"
        ],
        "title": "Manchester United Men Solid Black Track Pants",
        "price": 77,
        "id": 21379,
        "image": "../assets/product/21379.jpg",
        "size": "XXL"
    }
]

# Create a new dictionary to store the title and image pairs
image_paths = {}

# Extract the title and image path for each product
for product in data:
    title = product['id']
    image_path = product['image']
    image_paths[title] = image_path

# Save the image paths to a new JSON file
with open('imagePath.json', 'w') as file:
    json.dump(image_paths, file)
