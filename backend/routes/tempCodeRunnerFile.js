const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', (req, res) => {
    // Your chat logic here
    res.send('Chat route working');
  });
  
router.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.message;
    console.log(userInput);
    
    const response = await axios.post('https://api-inference.huggingface.co/models/gpt2', {
      inputs: userInput,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.HF_API_KEY}`,
      },
    });

    const aiResponse = response.data[0].generated_text.trim();
    res.json({ reply: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

module.exports = router;
