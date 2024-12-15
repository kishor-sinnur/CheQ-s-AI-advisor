require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Insert token and headers here
const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
};

router.post('/', async (req, res) => {
  try {
    const userInput = req.body.message;

    // Validate input
    if (!userInput || typeof userInput !== 'string') {
      return res.status(400).json({ error: 'Invalid input. Please provide a valid message.' });
    }

    console.log('User Input:', userInput);

    // Make the request to Hugging Face API
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2',
      { inputs: userInput },
      { headers } // Use the headers here
    );

    // Check if the response contains the expected generated text
    if (response.data && response.data[0] && response.data[0].generated_text) {
      const aiResponse = response.data[0].generated_text.trim();
      return res.json({ reply: aiResponse });
    } else {
      return res.status(500).json({ error: 'Failed to generate a response from the model.' });
    }

  } catch (error) {
    // Handle different types of errors
    console.error(error);
    if (error.response) {
      // Server responded with a non-2xx status code
      return res.status(error.response.status).json({ error: `API Error: ${error.response.data}` });
    } else if (error.request) {
      // No response was received from the API
      return res.status(503).json({ error: 'No response received from the AI model API.' });
    } else {
      // Other errors (e.g., invalid syntax)
      return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  }
});

module.exports = router;
