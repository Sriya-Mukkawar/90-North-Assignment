import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ChatList from "./components/ChatList";
import ChatPage from "./components/ChatPage";

const App = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true); // State to control LeftMenu visibility

  const toggleMenu = () => {
    setIsLeftMenuOpen((prevState) => !prevState);
  };

  const layoutStyle = {
    display: "grid",
    gridTemplateColumns: isLeftMenuOpen ? "250px 1fr 300px" : "0 1fr 300px", // Adjust grid when LeftMenu collapses
    marginTop: "50px",
    height: "calc(100vh - 50px)", // Adjust for Navbar height
    transition: "grid-template-columns 0.3s ease", // Smooth transition
  };

  const leftMenuStyle = {
    overflow: "hidden",
    transition: "width 0.3s",
  };

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} isCollapsed={!isLeftMenuOpen} /> {/* Pass the inverse of isLeftMenuOpen */}
      <div style={layoutStyle}>
        {/* Conditionally render LeftMenu based on isLeftMenuOpen */}
        <div style={leftMenuStyle}>{isLeftMenuOpen && <LeftMenu />}</div>
        
        {/* Main content section */}
        <div style={{ overflowY: "auto", height: "100%" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/chat/:username" element={<ChatPage />} />
            <Route path="/*" element={<MainContent />} />
          </Routes>
        </div>

        {/* RightPanel always visible */}
        <RightPanel />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
