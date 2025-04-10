import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"; // Assuming you have a separate CSS file for this

const About = () => {
  return (
    <div className="about-container">
      {/* Text Section */}
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to our store! We are passionate about providing you with
          high-quality products that enhance your lifestyle. Our team is
          dedicated to curating the best items and ensuring your shopping
          experience is seamless and enjoyable.
        </p>
        <p>
          From our humble beginnings to where we are today, we have always
          focused on customer satisfaction and innovation. Join us on our
          journey as we continue to bring you the best in the market.
        </p>
        <NavLink to="/contact" className="btn">
          Contact Us
        </NavLink>
      </div>

      {/* Image Section */}
      <div className="about-image">
        <img
          src="/assets/images/about.png" // Replace with your image path
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;
