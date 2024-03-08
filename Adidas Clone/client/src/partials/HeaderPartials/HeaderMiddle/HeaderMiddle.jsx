import React from "react";
import "./HeaderMiddle.css";
import { Link } from "react-router-dom";

export default function HeaderMiddle() {
  return (
    <div className="header-middle">
      <Link to="/" className="header-middle__link">
        help
      </Link>
      <Link to="/" className="header-middle__link">
        orders and returns
      </Link>
      <Link to="/register" className="header-middle__link">
        sign up
      </Link>
      <Link to="/login" className="header-middle__link">
        log in
      </Link>
    </div>
  );
}
