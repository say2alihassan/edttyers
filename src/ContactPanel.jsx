// ContactPanel.jsx
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import './App.css';

const ContactPanel = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openPanel: () => setIsOpen(true),
    closePanel: () => setIsOpen(false),
  }));

  if (!isOpen) return null; // don't render if closed

  return (
    <div className="contact-overlay">
      <div className="contact-content">
        <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        <h2>Contact Us</h2>

        <div className="contact-item">
          <FaEnvelope size={24} />
          <span>Email: <a href="mailto:Edmontontryes@outlook.com">Edmontontryes@outlook.com</a></span>
        </div>

        <div className="contact-item">
          <FaWhatsapp size={24} />
          <span>WhatsApp: <a href="https://wa.me/447881450926" target="_blank">+44 7881 450926</a></span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt size={24} />
          <span>Address: <a href="https://www.google.com/maps/search/?api=1&query=Unit+15,+Landmark,+Shaftesbury+Rd,+London+N18+1UB" target="_blank" rel="noopener noreferrer">Unit 15, Landmark, Shaftesbury Rd, London N18 1UB</a></span>
        </div>
      </div>
    </div>
  );
});

export default ContactPanel;
