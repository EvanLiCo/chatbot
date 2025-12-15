import React, { useState } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { getRandomResponse } from '../../utils/mockResponses';
import ChatbotHeader from './ChatbotHeader';
import MessageView from './MessageView';
import MessageInput from './MessageInput';
import './Chatbot.css';

const ChatbotWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const { elapsedTime, reset: resetTimer } = useTimer(isOpen);

  const handleSend = (text) => {
    const userMessage = { type: 'user', text };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = { type: 'bot', text: getRandomResponse() };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleReset = () => {
    setMessages([]);
    resetTimer();
  };

  const handleClose = () => {
    onClose();
    resetTimer();
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-window">
      <ChatbotHeader
        elapsedTime={elapsedTime}
        onReset={handleReset}
        onClose={handleClose}
      />
      <MessageView messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatbotWindow;

