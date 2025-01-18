// Footer.jsx
import React from "react";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height :"40px",
    backgroundColor: "#000080",
    color: "white",
    padding: "10px",
    textAlign: "center",
  };

  return <div style={footerStyle}>
  Copyright &copy; {new Date().getFullYear()} 90 North, Inc. 
</div>;
};

export default Footer;
