import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import banner2Desktop from "../../assets/images/banner-2-desktop.jpg";
import banner2Tablet from "../../assets/images/banner-2-tablet.jpg";
import banner2Mobile from "../../assets/images/banner-2-mobile.jpg";

export default function Men() {
  return (
    <div>
      <Banner
        desktopImg={banner2Desktop}
        tabletImg={banner2Tablet}
        mobileImg={banner2Mobile}
        title="Supercomfort. Supernova."
        desc="Your everyday run, elevated. Discover the comfort of Supernova."
        theme="wht"
      />
    </div>
  );
}
