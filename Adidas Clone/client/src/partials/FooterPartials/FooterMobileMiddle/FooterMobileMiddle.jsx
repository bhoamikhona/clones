import React from "react";
import "./FooterMobileMiddle.css";
import { Link } from "react-router-dom";

export default function FooterMobileMiddle() {
  return (
    <div className="footer-mobile-middle">
      <Link className="footer-mobile-middle__link" to="./login">
        Login
      </Link>
      <Link className="footer-mobile-middle__link" to="/cart">
        Your Bag (3)
      </Link>
    </div>
  );
}
