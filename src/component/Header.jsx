import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./Buttons/CartBtn";
import Login from "./Buttons/Login";
import Signup from "./Buttons/Signup";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid py-2">
        {/* Brand Name at the Start */}
        <NavLink className="navbar-brand fs-3 fw-bold text-primary" to="/">
          Electronics
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Centered Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Login, Signup, Cart - Aligned to the End */}
          <div className="d-flex gap-3">
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;