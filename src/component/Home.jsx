import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderProductCard = (item) => (
    <div className="card my-3 product-card" key={item.id}>
      <div className="card-body">
        <img src={item.image} className="card-img-top" alt={item.title} />
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text lead">${item.price}</p>
        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
          View Details
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"].map((img, index) => (
            <div key={img} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={`/assets/images/home/${img}`}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                height="500px"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Promotion Section */}
      <section className="container-fluid py-5 bg-gray shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-6 text-section">
            <h2 className="headline">Shop Now and Save Big!</h2>
            <p className="promo-text">
              Get up to <span className="highlight">50%</span> OFF on selected items.
            </p>
            <p className="offer-date">Offer valid until March 31</p>
            <NavLink to="/products" className="cta-button">
              Shop Now
            </NavLink>
          </div>
          <div className="col-md-6 text-center image-section">
            <img
              src="/OIP__1_-removebg-preview.png"
              alt="Featured product"
              className="img-fluid product-image mb-3"
            />
            <img
              src="/download__2_-removebg-preview.png"
              alt="Brand logo"
              className="img-fluid product-image mb-3"
            />
            <img
              src="/th__8_-removebg-preview.png"
              alt="Additional product"
              className="img-fluid product-image mb-3"
            />
          </div>
        </div>
      </section>

      {/* Electronics Products Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Explore Our Electronics</h2>
        <div className="row justify-content-center">
          {products.length > 0 ? (
            products.map(renderProductCard)
          ) : (
            <h3 className="text-center">Loading Products...</h3>
          )}
        </div>
      </section>

      {/* General Products Section */}
      <Product />
    </>
  );
};

export default Home;
