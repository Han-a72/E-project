import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  const state = useSelector((state) => state.addItem)
  const orderNumber = Math.floor(Math.random() * 1000000)
  const total = state.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="text-success mb-4">Thank you for your order!</h2>
        <p className="lead">Your order has been placed successfully.</p>
        <p><strong>Order Number:</strong> #{orderNumber}</p>
        <p>A confirmation email has been sent to your inbox.</p>
      </div>

      <hr className="my-5" />

      <div>
        <h4>Order Summary</h4>
        <ul className="list-group mb-3">
          {state.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <div><h6 className="my-0">{item.title}</h6></div>
              <span>${item.price}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
  )
}

export default Order
