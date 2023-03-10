import React from 'react'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Home from '../pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom'
import Test from '../testing/Test';

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />;
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default Body