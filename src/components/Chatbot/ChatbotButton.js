import React from 'react';
import './Chatbot.css';

const ChatbotButton = ({ onClick }) => {
  return (
    <button className="chatbot-button" onClick={onClick}>
      💬
    </button>
  );
};

export default ChatbotButton;

