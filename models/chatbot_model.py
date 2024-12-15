from transformers import pipeline
from huggingface_hub import login
import os

# Use your Hugging Face API key from environment variables or a .env file
api_key = os.getenv("HF_API_KEY")  # Ensure you set the API key in your environment
login(api_key)

# Example usage of a Hugging Face model
generator = pipeline('text-generation', model='gpt2')
print(generator("Hello, Hugging Face!", max_length=30))
