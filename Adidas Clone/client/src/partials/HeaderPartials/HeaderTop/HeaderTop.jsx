import React from "react";
import "./HeaderTop.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <span className="header-top__message">
        Free Delivery, Return & Exchange
      </span>
      <KeyboardArrowDownIcon fontSize="large" />
    </div>
  );
}
