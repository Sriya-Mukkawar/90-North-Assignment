import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3>Chat List</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <Link to={`/chat/${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
