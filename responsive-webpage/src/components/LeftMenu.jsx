// LeftMenu.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const LeftMenu = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the chat users from your backend API
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f4f4f4",
        overflowY: "auto",
        height: "calc(100vh - 100px)",
      }}
    >
      <h3>Chat List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/chat/${user.username}`}>{user.username}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
