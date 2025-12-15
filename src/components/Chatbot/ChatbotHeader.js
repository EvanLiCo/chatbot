import React from 'react';
import './Chatbot.css';

const ChatbotHeader = ({ elapsedTime, onReset, onClose }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="chatbot-header">
      <div className="chatbot-timer">Time: {formatTime(elapsedTime)}</div>
      <div className="chatbot-header-buttons">
        <button className="chatbot-btn-reset" onClick={onReset}>
          Reset
        </button>
        <button className="chatbot-btn-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;

