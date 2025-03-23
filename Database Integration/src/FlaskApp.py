from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

FlaskApp = Flask(__name__)
CORS(FlaskApp)  # Allows React frontend to connect without CORS issues

# Database Configuration
DB_CONFIG = {
    'dbname': 'general_regulations_keywords',
    'user': 'your_username',
    'password': 'sgdp25',
    'host': 'localhost',
    'port': 5432
}

# Database Connection
def connect_db():
    return psycopg2.connect(**DB_CONFIG)

# Fetch all categories
@FlaskApp.route('/api/categories', methods=['GET'])
def get_categories():
    connection = connect_db()
    cursor = connection.cursor()
    cursor.execute("SELECT DISTINCT category FROM regulations;")
    categories = [row[0] for row in cursor.fetchall()]
    cursor.close()
    connection.close()
    return jsonify(categories)

# Fetch sub-categories based on category
@FlaskApp.route('/api/subcategories', methods=['GET'])
def get_subcategories():
    category = request.args.get('category')
    if not category:
        return jsonify({"error": "Category is required"}), 400

    connection = connect_db()
    cursor = connection.cursor()
    cursor.execute(
        "SELECT DISTINCT sub_category FROM regulations WHERE category = %s;", 
        (category,)
    )
    subcategories = [row[0] for row in cursor.fetchall()]
    cursor.close()
    connection.close()
    return jsonify(subcategories)

# Generate report for filtered data
@FlaskApp.route('/api/regulations', methods=['POST'])
def get_filtered_regulations():
    filters = request.json.get('filters', {})

    connection = connect_db()
    cursor = connection.cursor()

    # Build dynamic query based on selected filters
    query = "SELECT * FROM regulations WHERE 1=1"
    values = []

    for key, value in filters.items():
        if value:  # Only add filters with selected values
            query += f" AND category = %s AND sub_category = %s"
            values.extend([key.capitalize(), value])

    cursor.execute(query, values)
    regulations = cursor.fetchall()

    result = [
        {"id": row[0], "category": row[2], "sub_category": row[3], "full_text": row[4]}
        for row in regulations
    ]

    cursor.close()
    connection.close()

    return jsonify(result)

if __name__ == '__main__':
    FlaskApp.run(debug=True, port=5000)
