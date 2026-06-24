import React, { useRef } from 'react';
import './App.css';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactPanel from './ContactPanel';

function App() {
  const contactRef = useRef();

  return (
    <div className="container">

      {/* Floating Right-side Contact Panel */}
      <ContactPanel ref={contactRef} />

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">EdmontonTryes</h2>
        <div className="nav-links">
          <a href="#tyres">Tyres</a>
          <a href="#services">Services</a>
          {/* Override contact link */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault(); // prevent scrolling
              contactRef.current?.openPanel(); // call panel open function
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ...rest of your sections... */}
    </div>
  );
}

export default App;
