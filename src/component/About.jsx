import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"; 

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start p-4">
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
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
          <NavLink to="/contact" className="btn btn-outline-primary mt-3">
            Contact Us
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center p-4">
          <img
            src="/assets/images/about.png"
            alt="About Us"
            className="img-fluid rounded "
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
