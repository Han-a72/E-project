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
    <div className="container my-5 py-3">
      <div className="row d-flex align-items-center">
        {/* Product Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="border rounded shadow-sm p-3 bg-white">
            <img src={product.image} alt={product.title} className="img-fluid rounded" style={{ maxWidth: "100%", height: "auto" }}/>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="p-4">
            <h1 className="display-5 fw-bold text-primary">{product.title}</h1>
            <hr className="w-50 mx-0 border-2 border-primary" />
            <h2 className="text-success fw-semibold my-3">${product.price}</h2>
            <p className="lead text-muted">{product.description}</p>
            <button
              onClick={handleCart}
              className="btn btn-lg btn-outline-primary px-4 py-2 mt-4"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
