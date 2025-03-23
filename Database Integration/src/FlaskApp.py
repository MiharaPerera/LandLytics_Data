from flask import Flask, request, jsonify
import psycopg2

FlaskApp = Flask(__name__)

DB_CONFIG = {
    'dbname': 'general_regulations_keywords',
    'user': 'your_username',
    'password': 'sgdp25',
    'host': 'localhost',
    'port': 5432
}

def get_data(category=None):
    connection = psycopg2.connect(**DB_CONFIG)
    cursor = connection.cursor()

    if category:
        cursor.execute("SELECT DISTINCT sub_category FROM regulations WHERE category = %s;", (category,))
    else:
        cursor.execute("SELECT DISTINCT category FROM regulations;")

    result = cursor.fetchall()
    cursor.close()
    connection.close()

    return [row[0] for row in result]

@FlaskApp.route('/data', methods=['GET'])
def data():
    category = request.args.get('category')
    data = get_data(category)
    return jsonify(data)

if __name__ == '__main__':
    FlaskApp.run(debug=True)
