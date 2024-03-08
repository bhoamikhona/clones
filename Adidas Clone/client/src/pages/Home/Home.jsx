import React from "react";
import "./Home.css";
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
    </div>
  );
}
