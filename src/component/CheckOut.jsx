import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.addItem);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 pt-4">Checkout Summary</h2>

      <div className="row">
        {/* Payment Method on the left */}
        <div className="col-md-6">
          <h5 className="mb-3">Payment Information</h5>
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Shipping Address" required />
            </div>

            <h6 className="mt-4">Payment Method</h6>
            <div className="mb-3">
              <label className="form-label">Credit Card Number</label>
              <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Expiration Date</label>
              <input type="month" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input type="text" className="form-control" placeholder="XXX" required />
            </div>

            <select className="form-select mb-4" required>
              <option value="">Choose Payment Method...</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>PayPal</option>
            </select>

            <button type="submit" className="btn btn-success bg-primary w-100">
              Confirm and Place Order
            </button>
          </form>
        </div>

        {/* Order Summary on the right */}
        <div className="col-md-6">
          <h5 className="mb-3">Order Summary</h5>
          <div className="p-4 border rounded shadow-sm">
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                  <span>{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
