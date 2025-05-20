import React, { useReducer, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; 
import "./App.css"; 

interface ChatState { 
  messages: { user: string; text: string }[]; 
  currentUser: string;
}

type ChatAction = 
  | { type: "send_message"; message: string }
  | { type: "switch_user" }; 

const initialState: ChatState = { 
  messages: [], 
  currentUser: "User1",
};


function chatReducer(state: ChatState, action: ChatAction): ChatState { 
  switch (action.type) {
    case "send_message":
      return {
        ...state,
        messages: [
          ...state.messages, 
          { user: state.currentUser, text: action.message } 
        ]
      };
    case "switch_user":
      return {
        ...state,
        currentUser: state.currentUser === "User1" ? "User2" : "User1",
      };
    default:
      return state; 
  }
}

function ChatApp() { 
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [input, setInput] = useState("");                      
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]); 
                        

  useEffect(() => { 
    inputRef.current?.focus(); 
  }, []);

  const handleSend = () => { 
    if (input.trim()) { 
      dispatch({ type: "send_message", message: input.trim() }); 
      setInput(""); 
      inputRef.current?.focus(); 
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-container">
        <header className="chat-header">
          <h1> ChatApp</h1>
          <button onClick={() => dispatch({ type: "switch_user" })}>
            Switch to {state.currentUser === "User1" ? "User2" : "User1"}
          </button>
        </header>

        <div className="chat-messages">
          {state.messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className={`chat-bubble ${
                msg.user === state.currentUser ? "own" : "other"
              }`}
            >
              <span className="chat-user">{msg.user}</span>
              {msg.text}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <footer className="chat-footer">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
          />
          <button onClick={handleSend} disabled={!input.trim()}>
            Send
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ChatApp;
