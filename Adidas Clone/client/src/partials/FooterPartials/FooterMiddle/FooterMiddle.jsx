import React from "react";
import "./FooterMiddle.css";
import instagramIcon from "../../../assets/images/instagram-logo-footer.jpg";

export default function FooterMiddle() {
  return (
    <div className="footer-middle">
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">Products</h5>
        </li>
        <li>
          <span className="footer-middle__list-item">Footwear</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Clothing</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Accessories</span>
        </li>
        <li>
          <span className="footer-middle__list-item"></span>
        </li>
        <li>
          <span className="footer-middle__list-item">Outlet - Sale</span>
        </li>
        <li>
          <span className="footer-middle__list-item">New Arrivals</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Special Offer</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Flat 50% Off!</span>
        </li>
      </ul>
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">Sports</h5>
        </li>
        <li>
          <span className="footer-middle__list-item">Cricket</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Running</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Football</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Gym/Training</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Tennis</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Outdoor</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Basketball</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Swimming</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Skateboarding</span>
        </li>
      </ul>
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">Collections</h5>
        </li>
        <li>
          <span className="footer-middle__list-item">Ultraboost</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Superstar</span>
        </li>
        <li>
          <span className="footer-middle__list-item">NMD</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Stan Smith</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Sustainability</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Predator</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Parley</span>
        </li>
        <li>
          <span className="footer-middle__list-item">adicolor</span>
        </li>
      </ul>
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">Support</h5>
        </li>
        <li>
          <span className="footer-middle__list-item">Help</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Customer Services</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Returns & Exchanges</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Shipping</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Order Tracker</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Store Locator</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Running Shoe Finder</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Bra Fit Guide</span>
        </li>
        <li>
          <span className="footer-middle__list-item">adiclub</span>
        </li>
        <li>
          <span className="footer-middle__list-item">
            adiclub Terms and conditions
          </span>
        </li>
      </ul>
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">
            Company <br /> Info
          </h5>
        </li>
        <li>
          <span className="footer-middle__list-item">About Us</span>
        </li>
        <li>
          <span className="footer-middle__list-item">adidas stories</span>
        </li>
        <li>
          <span className="footer-middle__list-item">adidas Apps</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Entity Details</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Press</span>
        </li>
        <li>
          <span className="footer-middle__list-item">Careers</span>
        </li>
      </ul>
      <ul className="footer-middle__list">
        <li>
          <h5 className="footer-middle__list-heading">Follow Us</h5>
        </li>
        <li>
          <span className="footer-middle__list-item">
            {" "}
            <img src={instagramIcon} alt="Instram Icon" />{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}
