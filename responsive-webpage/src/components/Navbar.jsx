import React from "react";

const Navbar = ({ toggleMenu, isCollapsed }) => {  // Receive props
  const navbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "40px",
    backgroundColor: "#000080",
    color: "white",
    padding: "10px 20px",
    zIndex: 1000,
  };

  const toggleButtonStyle = {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",  // Increase the font size for better visibility
    padding: "5px",
  };

  return (
    <div style={navbarStyle}>
      <button style={toggleButtonStyle} onClick={toggleMenu}>
        {isCollapsed ? "☰" : "×"}  {/* Toggle icons based on isCollapsed */}
      </button>
    </div>
  );
};

export default Navbar;
