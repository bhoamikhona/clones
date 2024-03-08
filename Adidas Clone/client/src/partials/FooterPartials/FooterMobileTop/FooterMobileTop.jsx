import React from "react";
import "./FooterMobileTop.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function FooterMobileTop() {
  return (
    <div className="footer-mobile-top">
      <KeyboardArrowUpIcon fontSize="large" />
      <span className="footer-mobile-top__message">Back to Top</span>
    </div>
  );
}
