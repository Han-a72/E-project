import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartBtn from "./Buttons/CartBtn";
import Login from "./Buttons/Login";
import Signup from "./Buttons/Signup";
import Logout from "./Buttons/Logout";
// import "bootstrap/dist/css/bootstrap.min.css"; //// Import Bootstrap CSS

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login"); // Navigate to login page after logout
  };

  // Hide CartBtn only on the /order page
  const hideCart = location.pathname === "/order";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid py-2">
        <NavLink className="navbar-brand fs-3 fw-bold text-primary" to="/">
          Electronics
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

          <div className="d-flex gap-3">
            {isAuthenticated ? (
              // Show Logout Button when authenticated
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                {/* Show Login and Signup buttons when not authenticated */}
                <Login setIsAuthenticated={setIsAuthenticated} />
                <Signup setIsAuthenticated={setIsAuthenticated} />
              </>
            )}

            {/* Hide Cart button only on the /order page */}
            {!hideCart && <CartBtn />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
