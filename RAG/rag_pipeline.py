from langchain.chains import ConversationalRetrievalChain
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate

def create_chatbot():
    # Connect to vector store
    db = get_db_connection()
    
    # Create retriever
    retriever = db.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3}  # Return top 3 most relevant regulations
    )
    
    # Create LLM
    llm = ChatOpenAI(model_name="gpt-4", temperature=0)
    
    # Custom prompt template for better responses
    template = """You are an AI assistant specialized in land development regulations.
    Use the following retrieved regulations to answer the user's question.
    If you don't know the answer based on the provided regulations, say that you don't know.
    Do not make up information that is not in the regulations.
    
    Retrieved Regulations:
    {context}
    
    Chat History:
    {chat_history}
    
    User Question: {question}
    
    Answer:"""
    
    PROMPT = PromptTemplate(
        input_variables=["context", "chat_history", "question"],
        template=template
    )
    
    # Set up memory
    memory = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True,
        output_key="answer"
    )
    
    # Create the conversational chain
    qa_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=retriever,
        memory=memory,
        combine_docs_chain_kwargs={"prompt": PROMPT},
        return_source_documents=True,
        verbose=True
    )
    
    return qa_chain
