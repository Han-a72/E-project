import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/Index";
import "./Home.css"; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCart = () => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  if (!product) {
    return <h3 className="text-center my-5">Loading Product Details...</h3>;
  }

  return (
    <div className="container my-5 py-4">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center">
          <div className="border rounded shadow-sm p-3 bg-white h-100 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">{product.title}</h2>
          <hr className="w-50 border-primary" />
          <h4 className="text-success fw-semibold my-3">${product.price}</h4>
          <p className="lead text-muted">{product.description}</p>
          <button
            onClick={handleCart}
            className="btn btn-outline-primary btn-lg px-4 mt-3"
          >
            {cartBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
