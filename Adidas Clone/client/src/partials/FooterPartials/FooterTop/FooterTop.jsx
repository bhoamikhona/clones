import React from "react";
import "./FooterTop.css";
import { Link } from "react-router-dom";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <p className="footer-top__message">Join Adidas and Get 15% Off</p>
      <Link to="/register" className="primary-btn btn-blk">
        Sign Up For Free &#10230;
      </Link>
    </div>
  );
}
