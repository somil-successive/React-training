import React from "react";
import { useTheme } from "./ThemeContext";
import { useState } from "react";

function SwitchButton() {
  const { theme, toggleTheme } = useTheme();
  const [color, setColor] = useState("black");

  const divStyle = {
    backgroundColor: color === "black" ? "black" : "white",
  };

  return (
    <div style={divStyle}>
      <p style={{ color: "red" }}>Hello Everyone</p>

      <button
        onClick={() => {
          setColor(color === "black" ? "white" : "black");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default SwitchButton;
