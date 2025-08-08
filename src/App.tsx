import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ProductSolo from './components/Products/ProductSolo';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductSolo />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
