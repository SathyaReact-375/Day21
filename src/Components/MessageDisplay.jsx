import React from "react";
import { useSelector } from "react-redux";

const MessageDisplay = () => {
  const message = useSelector((state) => state.message.text); 

  return (
    <div>
       
      <h2>Global Message:</h2>
      <p>{message}</p>
    </div>
  );
};

export default MessageDisplay;