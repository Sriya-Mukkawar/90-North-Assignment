// MainContent.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // If you're using React Router for routing

const MainContent = () => {
  const { username } = useParams(); // Get the username from the URL parameter
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch the messages for the specific chat room (username)
    if (username) {
      fetch(`http://127.0.0.1:8000/api/chat/${username}/messages/`)
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [username]);

  return (
    <div style={{ padding: "20px", overflowY: "auto", height: "calc(100vh - 100px)" }}>
      <h3>Chat with {username}</h3>
      <div>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{message.sender}</strong>: {message.text}
          </div>
        ))}
      </div>
      {/* Add a form to send new messages */}
      <form>
        <input type="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MainContent;
