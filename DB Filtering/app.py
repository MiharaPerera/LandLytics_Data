
from flask import Flask, request, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

# Database connection
def get_db_connection():
    return psycopg2.connect(
        dbname="your_database",
        user="your_user",
        password="your_password",
        host="your_host",
        port="your_port"
    )

# Fetch filtered regulations
@app.route('/api/regulation-filter', methods=['GET'])
def get_filtered_regulations():
    category = request.args.getlist('category')  # Get multiple category filters
    sub_category = request.args.getlist('sub_category')  # Get multiple subcategories

    query = "SELECT clause_number, category, sub_category, full_text FROM regulations WHERE TRUE"
    params = []

    if category:
        query += " AND category = ANY(%s)"
        params.append(category)
    if sub_category:
        query += " AND sub_category = ANY(%s)"
        params.append(sub_category)

    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute(query, params)
    regulations = cur.fetchall()
    cur.close()
    conn.close()

    return jsonify(regulations)

if __name__ == '__main__':
    app.run(debug=True)