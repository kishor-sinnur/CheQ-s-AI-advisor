import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css'; // Import the CSS file

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: userMessage,
      });
      setAiResponse(response.data.reply);
    } catch (error) {
      console.error('Error sending message', error);
      setAiResponse('Sorry, there was an error with the AI response.');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Say something..."
          className="input-field"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
      <div className="chat-response">
        <h3>AI Response:</h3>
        <p className="response-text">{aiResponse}</p>
      </div>
    </div>
  );
};

export default Chat;
