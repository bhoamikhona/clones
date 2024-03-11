import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// components
import Banner from "../../components/Banner/Banner.jsx";

// images
import banner1Desktop from "../../assets/images/banner-1-desktop.jpg";
import banner1Tablet from "../../assets/images/banner-1-tablet.jpg";
import banner1Mobile from "../../assets/images/banner-1-mobile.jpg";
import banner2Desktop from "../../assets/images/banner-2-desktop.jpg";
import banner2Tablet from "../../assets/images/banner-2-tablet.jpg";
import banner2Mobile from "../../assets/images/banner-2-mobile.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home__topbar">
        <h1 className="home__topbar-heading">
          ADIDAS: THE BRAND WITH THE 3-STRIPES
        </h1>
        <CloseOutlinedIcon fontSize="large" />
      </div>
      <Banner
        desktopImg={banner1Desktop}
        tabletImg={banner1Tablet}
        mobileImg={banner1Mobile}
        title="Yeezy"
        desc="Available Now."
        theme="blk"
      />
      <Banner
        desktopImg={banner2Desktop}
        tabletImg={banner2Tablet}
        mobileImg={banner2Mobile}
        title="Supercomfort. Supernova."
        desc="Experience maximum comfort with the new Supernova."
        theme="wht"
      />

      <section className="section-popular">
        <h3 className="section-popular__title">Popular right now</h3>
        <ul className="section-popular__list">
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              samba
            </Link>
          </li>
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              running shoes men
            </Link>
          </li>
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              nmd
            </Link>
          </li>
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              backpack
            </Link>
          </li>
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              men sandals
            </Link>
          </li>
          <li className="section-popular__list-item">
            <Link to="/products" className="section-popular__link">
              bag
            </Link>
          </li>
        </ul>
      </section>

      <section className="section-stories">
        <div className="section-stories__left">
          <h4 className="section-stories__title">
            STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
          </h4>
          <p className="section-stories__para">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We’re
            here to support creators. Improve their game. Their lives. And
            change the world.
          </p>

          <p className="section-stories__para">
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>
        <div className="section-stories__right">
          <h4 className="section-stories__title">
            WORKOUT CLOTHES, FOR ANY SPORT
          </h4>
          <p className="section-stories__para">
            adidas designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
          </p>

          <p className="section-stories__para">
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </p>
        </div>
      </section>
    </div>
  );
}
