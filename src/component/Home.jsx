import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // State for holding product data
  const [products, setProducts] = useState([]);

  // Fetch electronic products once when the component mounts
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

  // Function to render each product card
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
      {/* Promotion Section */}
      <section className="container-fluid py-5 bg-gray shadow-sm">
        <div className="row align-items-center">
          {/* Text Section */}
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
          {/* Image Section (with three images) */}
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

      {/* Product List Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Explore Our Products</h2>
        <div className="row justify-content-center">
          {products.length > 0 ? (
            products.map(renderProductCard)
          ) : (
            <h3 className="text-center">Loading Products...</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
