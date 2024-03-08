import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner({
  desktopImg,
  tabletImg,
  mobileImg,
  title,
  desc,
  theme,
}) {
  return (
    <section className="banner">
      <div className="banner__img-container">
        <picture className="banner__img">
          <source media="(max-width: 37.5em)" srcSet={mobileImg} />
          <source media="(max-width: 76.8em)" srcSet={tabletImg} />
          <img className="banner__img" src={desktopImg} alt={title} />
        </picture>
        <div className="banner__info-container">
          <h2 className={`banner__title ${theme}`}>{title}</h2>
          <p className={`banner__desc ${theme}`}>{desc}</p>
          <Link to="/" className={`primary-btn btn-${theme}`}>
            Shop Now &#10230;
          </Link>
        </div>
      </div>
    </section>
  );
}
