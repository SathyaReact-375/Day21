import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice"; 

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode); 

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#222" : "#fff",
        color: theme === "light" ? "#fff" : "#222",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;