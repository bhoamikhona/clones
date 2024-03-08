import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import banner4Desktop from "../../assets/images/banner-4-desktop.jpg";
import banner4Tablet from "../../assets/images/banner-4-tablet.jpg";
import banner4Mobile from "../../assets/images/banner-4-mobile.jpg";

export default function Kids() {
  return (
    <div>
      <Banner
        desktopImg={banner4Desktop}
        tabletImg={banner4Tablet}
        mobileImg={banner4Mobile}
        title="Kids Jersey"
        desc="Available Now."
        theme="wht"
      />
    </div>
  );
}
