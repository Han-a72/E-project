<<<<<<< HEAD
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
=======
import './App.css';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
>>>>>>> 83e7c63cb11d05943b2550cd53335d00853428e5
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
<<<<<<< HEAD
=======
import { Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> 83e7c63cb11d05943b2550cd53335d00853428e5
import ProductDetail from './component/ProductDetails';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

<<<<<<< HEAD
const App = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};
=======
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect all unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
>>>>>>> 83e7c63cb11d05943b2550cd53335d00853428e5

export default App;
