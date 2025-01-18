import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: username,
        password: password,
      });
      if (response.data.status === "success") {
        // Redirect to the chat list page
        navigate("/chatlist");
      } else {
        setErrorMessage([
          `Username: ${response.data.message.username?.join(" ") || ""}`,
          `Password: ${response.data.message.password2?.join(" ") || ""}`,
        ]);
      }
    } catch (error) {
      setErrorMessage("An error occurred while signing up.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "20px auto",
        marginTop: "150px",
        backgroundColor: "#fff",
      }}
    >
      <h2>Sign Up</h2>

      <form onSubmit={handleSignUp} style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
      {errorMessage.length > 0 && (
        <div
          style={{
            marginTop: "10px",
            color: "red",
          }}
        >
          <h3>Error:</h3>
          <ul>
            {errorMessage.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignUp;
