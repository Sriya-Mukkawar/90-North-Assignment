import React from "react";

const RightPanel = () => {
  const panelStyle = {
    backgroundColor: "#f4f4f4",
    padding: "60px",
    borderLeft: "1px solid #ddd",
    width: "200px",
    height: "100vh",  // Make the panel fixed to the right
    top: "0",           // Align it to the top
    right: "0",        // Ensure it stays on top of other elements
  };

  return (
    <div style={panelStyle}>
      <h3>Right Panel</h3>
      <p>Additional content or links.</p>
    </div>
  );
};

export default RightPanel;
