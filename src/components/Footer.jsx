import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Recommended</h4>
          <ul>
            <li>realme C75</li>
            <li>realme 13+ 5G</li>
            <li>realme Note 60</li>
            <li>realme C61</li>
            <li>realme C65</li>
            <li>realme 12</li>
            <li>realme 12+ 5G</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Troubleshooting</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About realme</h4>
          <ul>
            <li>Our Brand</li>
            <li>Newsroom</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact realme</h4>
          <ul>
            <li>Whatsapp</li>
            <li>service.pk@realme.com</li>
          </ul>
          <p className="contact-number"><strong>04238048018</strong></p>
          <p>09:30 - 18:00, MON - SAT<br />Exclude Holidays</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Pakistan ( English / PKR ) &copy; 2019-2024 realme. All Rights Reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Sales</a>
          </li>
          <li>
            <a href="#">Warranty Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
