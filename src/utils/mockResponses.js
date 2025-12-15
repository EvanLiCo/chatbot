const responses = [
  "That's an interesting question! Let me think about that.",
  "I understand what you're asking. Here's what I think...",
  "Thanks for your message! I'm here to help.",
  "That's a great point! Let me provide some information on that.",
  "I appreciate you reaching out. Here's my response.",
  "Interesting! Let me share my thoughts on that topic.",
  "I see what you mean. Here's what I can tell you.",
  "Thanks for asking! I'd be happy to help with that.",
];

export const getRandomResponse = () => {
  return responses[Math.floor(Math.random() * responses.length)];
};

