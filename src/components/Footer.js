import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">Blogr</div>
      <div className="footer-grouping">
        <div className="footer-grouping-title">Product</div>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Overview
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Pricing
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Marketplace
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Features
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Intergrations
        </a>
      </div>
      <div className="footer-grouping">
        <div className="footer-grouping-title">Company</div>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          About
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Team
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Blog
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Careers
        </a>
      </div>
      <div className="footer-grouping">
        <div className="footer-grouping-title">Connect</div>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Contact
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Newsletter
        </a>
        <a href="https://dylanmanfredi.xyz" className="footer-item">
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
