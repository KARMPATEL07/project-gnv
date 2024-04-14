import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from "./components/Form"

import ReactGA from 'react-ga4'
ReactGA.initialize("G-RMFS0M771F");
function App() {

  
  useEffect(()=>{
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  },[]);

  return (
    <div className="butterfly-kids-regular">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
