import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/"); // Redirect to home
    window.location.reload(); // Optional: force a refresh to reset UI state
  };

  return (
    <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
