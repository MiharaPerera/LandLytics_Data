import streamlit as st
from rag_pipeline import create_chatbot

st.title("Land Regulations Assistant")
st.write("Ask me any questions about land regulations and development rules.")

# Initialize session state for chat history
if "messages" not in st.session_state:
    st.session_state.messages = []
    # Initialize the chatbot
    st.session_state.chatbot = create_chatbot()

# Display chat history
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Chat input
prompt = st.chat_input("Ask about land regulations...")
if prompt:
    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    # Display user message
    with st.chat_message("user"):
        st.markdown(prompt)
    
    # Get AI response
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        
        # Query the chatbot
        result = st.session_state.chatbot({"question": prompt})
        response = result["answer"]
        sources = result["source_documents"]
        
        # Display the answer
        message_placeholder.markdown(response)
        
        # Optionally display the sources
        if sources:
            with st.expander("View Source Regulations"):
                for i, doc in enumerate(sources):
                    st.markdown(f"**Regulation {i+1}:** {doc.metadata['clause_number']} - {doc.metadata['category']}")
                    st.markdown(doc.page_content)
    
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response})
