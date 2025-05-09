import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMessage } from "./messageSlice"; 

const MessageUpdate = () => {
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateMessage(newMessage)); 
    setNewMessage(""); 
  };

  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter a new message"
      />
      <button onClick={handleUpdate}>Update Message</button>
    </div>
  );
};

export default MessageUpdate;