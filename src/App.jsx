import './App.css';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './component/ProductDetails';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

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

export default App;
