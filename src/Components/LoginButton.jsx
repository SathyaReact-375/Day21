import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./userAuthSlice"; 

const LoginButton = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john@example.com" }; 
    dispatch(login(userData));
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;