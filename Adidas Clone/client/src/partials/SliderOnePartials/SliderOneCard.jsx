import React from "react";
import "./SliderOneCard.css";
import { FavoriteBorderOutlined } from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function SliderOneCard({ shoeName, category, price, img }) {
  return (
    <Link to="/" className="slider-one-card__link">
      <div className="slider-one-card">
        <div className="slider-one-card__img-container">
          <img src={img} alt="t-shirt" className="slider-one-card__img" />
          <FavoriteBorderOutlined
            fontSize="large"
            className="slider-one-card__heart-icon"
          />
          <span className="slider-one-card__price">₹{price}</span>
        </div>
        <div className="slider-one-card__info-container">
          <p className="slider-one-card__title">{shoeName}</p>
          <span className="slider-one-card__desc">{category}</span>
        </div>
      </div>
    </Link>
  );
}
