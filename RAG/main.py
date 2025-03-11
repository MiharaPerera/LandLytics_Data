import argparse
from database_connection import CONNECTION_STRING
from embeddings_generator import create_regulation_embeddings
import os
import subprocess

def main():
    parser = argparse.ArgumentParser(description="Land Regulations Chat Assistant")
    parser.add_argument("--setup", action="store_true", help="Set up the database and generate embeddings")
    parser.add_argument("--run", action="store_true", help="Run the web application")
    args = parser.parse_args()
    
    if args.setup:
        print("Setting up embeddings...")
        result = create_regulation_embeddings()
        print(result)
        
    if args.run:
        print("Starting web application...")
        subprocess.run(["streamlit", "run", "web_app.py"])
        
    if not args.setup and not args.run:
        print("Please specify an action: --setup or --run")

if __name__ == "__main__":
    main()
