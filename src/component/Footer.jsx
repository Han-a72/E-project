import React from "react";
import "./Home.css";

const Footer = () => {
  return (
    <footer className="footer text-center text-white py-3">
      <div className="container">
        <small>
          © 2025 <strong>ShopEase</strong>. All rights reserved. |
          <a href="#" className="footer-link"> Privacy Policy </a>|
          <a href="#" className="footer-link"> Terms of Service </a>|
          <a href="#" className="footer-link"> Refund Policy </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
