# Chatbot Website

A responsive React.js website featuring a chatbot interface, navigation menu, and dynamic content filtering.

## Features

- **Navbar**: Logo on the left, search bar on the right
- **Side Menu**: Navigation between "Apps" and "Documents" pages
- **Content Area**: Displays page content with search filtering and text highlighting
- **Chatbot**: 
  - Floating button (bottom right)
  - Chat window with timer, reset, and close functionality
  - Message history with user/bot message distinction
  - Responsive design (full screen on mobile)

## Technical Stack

- React 18.2.0
- React Context API for global state management
- Custom hook: `useTimer` for elapsed time tracking
- CSS3 for styling with responsive design

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── SideMenu.js
│   ├── ContentArea.js
│   └── Chatbot/
│       ├── ChatbotButton.js
│       ├── ChatbotWindow.js
│       ├── ChatbotHeader.js
│       ├── MessageView.js
│       └── MessageInput.js
├── context/
│   └── AppContext.js
├── hooks/
│   └── useTimer.js
├── utils/
│   └── mockResponses.js
├── App.js
└── index.js
```

## Development Decisions

1. **State Management**: Used React Context API for global state (menu selection, search query) as it's lightweight and sufficient for this application.

2. **Custom Hook**: Created `useTimer` hook to manage the chatbot timer functionality, making it reusable and testable.

3. **Responsive Design**: Implemented mobile-first approach with CSS media queries. Chatbot window becomes full screen on mobile devices.

4. **Search Functionality**: Real-time filtering of content paragraphs with case-insensitive matching and text highlighting using React's JSX.

5. **Component Architecture**: Separated chatbot into multiple components (Header, MessageView, MessageInput) for better maintainability and reusability.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

