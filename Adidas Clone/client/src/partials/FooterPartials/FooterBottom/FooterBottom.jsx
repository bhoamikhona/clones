import React from "react";
import "./FooterBottom.css";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom__top">
        <ul className="footer-bottom__list">
          <li className="footer-bottom__list-item">Privacy Policy</li>
          <li className="footer-bottom__list-item">|</li>
          <li className="footer-bottom__list-item">Terms and Conditions</li>
          <li className="footer-bottom__list-item">|</li>
          <li className="footer-bottom__list-item">Cookies</li>
        </ul>
      </div>
      <div className="footer-bottom__bottom">
        <span className="footer-bottom__copyright-message">
          ©2021 adidas India Marketing Pvt. Ltd
        </span>
      </div>
    </div>
  );
}
