import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import ContentArea from './components/ContentArea';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import ChatbotWindow from './components/Chatbot/ChatbotWindow';
import './App.css';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        <SideMenu />
        <ContentArea />
        <ChatbotButton onClick={() => setIsChatbotOpen(true)} />
        <ChatbotWindow
          isOpen={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
        />
      </div>
    </AppProvider>
  );
}

export default App;

