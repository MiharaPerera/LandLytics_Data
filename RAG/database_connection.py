import os
from dotenv import load_dotenv
from langchain_postgres.vectorstores import PGVector
from langchain.schema import Document
from langchain_openai import OpenAIEmbeddings

# Load environment variables
load_dotenv()

# Database connection settings
CONNECTION_STRING = os.environ.get("DATABASE_URL", "postgresql://postgres:password@localhost:5432/land_regulations")

# Initialize OpenAI embeddings
embeddings = OpenAIEmbeddings()

# Connect to PostgreSQL database
def get_db_connection():
    return PGVector(
        connection_string=CONNECTION_STRING,
        embedding_function=embeddings,
        collection_name="regulations_embeddings",
        table_name="regulations"  # Your existing table
    )
