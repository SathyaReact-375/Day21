import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./userAuthSlice"; 

const LogoutButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default LogoutButton;