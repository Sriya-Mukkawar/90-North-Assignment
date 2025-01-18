import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { username } = useParams(); // Get username from URL
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch chat history for the user (simulate API call)
    const savedMessages = JSON.parse(localStorage.getItem(`chat-${username}`)) || [];
    setMessages(savedMessages);
  }, [username]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim()) {
      const message = {
        sender: "You",
        text: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem(`chat-${username}`, JSON.stringify(updatedMessages));
      setNewMessage(""); // Clear input field
    }
  };

  return (
    <div style={{ padding: "20px", overflowY: "auto", height: "calc(100vh - 100px)" }}>
      <h3>Chat with {username}</h3>
      <div style={{ marginBottom: "20px", maxHeight: "60vh", overflowY: "auto" }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{message.sender}</strong>: {message.text} <small>{message.timestamp}</small>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", background: "#007BFF", color: "#fff", border: "none" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
