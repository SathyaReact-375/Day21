import React from "react";
import { useSelector } from "react-redux";

const ThemeContainer = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode); 

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default ThemeContainer;