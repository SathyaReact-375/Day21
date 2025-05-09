import React from "react";
import { useSelector } from "react-redux";

const AuthStatus = () => {
  const user = useSelector((state) => state.userAuth.user); 
  const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default AuthStatus;