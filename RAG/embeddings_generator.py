import psycopg2
from psycopg2.extras import RealDictCursor
from langchain.schema import Document
from langchain_openai import OpenAIEmbeddings
from langchain_postgres.vectorstores import PGVector

# Define CONNECTION_STRING with actual credentials
CONNECTION_STRING = "postgresql://postgres:addyourpasswrod@localhost:5432/general_regulations_keywords"

# Initialize OpenAI embeddings
embeddings = OpenAIEmbeddings()

# Connect to PostgreSQL database with PGVector
def get_db_connection():
    return PGVector(
        connection_string=CONNECTION_STRING,
        embedding_function=embeddings,
        collection_name="regulations_embeddings",
        table_name="regulations"  # Your existing table
    )

def create_regulation_embeddings():
    # Connect to PostgreSQL database
    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    # Fetch all regulations from the database
    cursor.execute("SELECT * FROM regulations")
    regulations = cursor.fetchall()
    
    # Convert the regulations to documents
    documents = []
    for reg in regulations:
        # Create a rich text representation
        content = f"Regulation {reg['clause_number']}: {reg['category']} - {reg['sub_category']}\n"
        content += f"Full text: {reg['full_text']}\n"
        if reg['summary']:
            content += f"Summary: {reg['summary']}\n"
        if reg['regulatory_references']:
            content += f"References: {reg['regulatory_references']}\n"
        
        # Create a document with metadata
        doc = Document(
            page_content=content,
            metadata={
                "id": reg["id"],
                "clause_number": reg["clause_number"],
                "category": reg["category"],
                "sub_category": reg["sub_category"],
                "keywords": reg["keywords"],
                "source": "regulations_db"
            }
        )
        documents.append(doc)
    
    # Get vector database connection and add documents
    db = get_db_connection()
    db.add_documents(documents)
    
    cursor.close()
    conn.close()
    
    return f"Created embeddings for {len(documents)} regulations"
