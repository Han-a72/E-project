import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
    <div className="col-sm-6 col-md-4 col-lg-3 d-flex" key={item.id}>
      <div className="card mb-4 shadow-sm w-100">
        <img
          src={item.image}
          className="card-img-top p-3"
          alt={item.title}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">{item.title}</h5>
          <p className="card-text lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary mt-auto">
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="container-fluid py-5 bg-light">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="display-5 fw-bold">Shop Now and Save Big!</h2>
            <p className="fs-5">
              Get up to <span className="text-primary fw-bold">50%</span> OFF on selected items.
            </p>
            <p className="text-muted">Offer valid until March 31</p>
            <NavLink to="/products" className="btn btn-primary px-4 py-2 mt-2">
              Shop Now
            </NavLink>
          </div>
          <div className="col-md-6 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <img
                src="/OIP__1_-removebg-preview.png"
                alt="Featured product"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
              <img
                src="/download__2_-removebg-preview.png"
                alt="Brand logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
              <img
                src="/th__8_-removebg-preview.png"
                alt="Additional product"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      {/* <section className="container py-5">
        <h2 className="text-center mb-4">Explore Our Electronics</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map(renderProductCard)
          ) : (
            <div className="text-center">
              <h5>Loading Products...</h5>
            </div>
          )}
        </div>
      </section> */}
    </>
  );
};

export default Home;
