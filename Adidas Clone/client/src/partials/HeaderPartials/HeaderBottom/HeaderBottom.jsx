import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function HeaderBottom() {
  return (
    <nav className="navbar">
      <div className="navbar__left-mobile">
        <MenuIcon fontSize="large" />
        <FavoriteBorderIcon fontSize="large" />
      </div>
      <div className="navbar__logo-container">
        <Link className="navbar__logo-link" to="/">
          <svg
            className="navbar__logo"
            viewBox="100 100 50 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              fill="black"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="navbar__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__list-item">
            <Link to="/men" className="main-nav__link bold">
              Men
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/women" className="main-nav__link bold">
              Women
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/kids" className="main-nav__link bold">
              Kids
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/" className="main-nav__link">
              Sports
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/" className="main-nav__link">
              Brands
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/" className="main-nav__link">
              Lifestyle
            </Link>
          </li>
          <li className="main-nav__list-item">
            <Link to="/" className="main-nav__link bold red">
              Outlet
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar__right">
        <div className="navbar__search">
          <form className="navbar__search-form">
            <input
              type="text"
              className="navbar__search-input"
              placeholder="Search"
            />
            <SearchIcon fontSize="large" />
          </form>
        </div>
        <PersonOutlineOutlinedIcon fontSize="large" />
        <SearchIcon fontSize="large" className="navbar__right--search-icon" />
        <FavoriteBorderIcon
          fontSize="large"
          className="navbar__right--heart-icon"
        />
        <ShoppingBagOutlinedIcon fontSize="large" />
      </div>
    </nav>
  );
}
