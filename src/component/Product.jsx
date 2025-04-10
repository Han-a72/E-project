import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const products = await response.json();
        
        if (componentMounted) {
          setData(products);
          setFilter(products);  // Ensure filtered data is properly stored
        }
      } catch (error) {
        console.error("Error fetching electronic products:", error);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const cardItem = (item) => (
    <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt={item.title} style={{height:"200px"}} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="lead">${item.price}</p>
        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
          Buy Now
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Electronic Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-evenly">
          {filter.length > 0 ? filter.map(cardItem) : <h3>Loading...</h3>}
        </div>
      </div>
    </div>
  );
};

export default Product;
