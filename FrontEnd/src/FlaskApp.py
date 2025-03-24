from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Connect to PostgreSQL
def connect_db():
    return psycopg2.connect(
        dbname="your_db_name",
        user="your_user",
        password="your_password",
        host="localhost",  # Use the appropriate host if using a remote DB
        port="5432"
    )

@app.route("/regulations", methods=["GET"])
def get_regulations():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM public.regulations;")
    rows = cursor.fetchall()
    regulations = []
    for row in rows:
        regulations.append({
            "id": row[0],
            "clause_number": row[1],
            "category": row[2],
            "sub_category": row[3],
            "full_text": row[4],
            "summary": row[5],
            "regulatory_references": row[6],
            "keywords": row[7],
            "created_at": row[8].strftime("%Y-%m-%d %H:%M:%S")
        })
    cursor.close()
    conn.close()
    return jsonify(regulations)

if __name__ == "__main__":
    app.run(debug=True)
