<<<<<<< HEAD
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
=======
import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. Unde adipisci hic provident est sint corporis, dolorem esse autem soluta molestiae optio quisquam eligendi obcaecati minima?
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
>>>>>>> 83e7c63cb11d05943b2550cd53335d00853428e5
