import React from 'react'; 
import './Footer.css'
const Footer = () => {
  return (
    <footer className="amazon-footer">
      {/* Back to Top Button */}
      <div className="footer-back-to-top">
        <button onClick={() => window.scrollTo(0, 0)}>Back to top</button>
      </div>

      {/* Main Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo" 
            width="100px"
          />
        </div>

        <div className="footer-country">
          <span>🌎 English (US) | $ USD</span>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; 1996-{new Date().getFullYear()}, Amazon Clone by Sudais, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;