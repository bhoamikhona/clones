import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import banner3Desktop from "../../assets/images/banner-3-desktop.jpg";
import banner3Tablet from "../../assets/images/banner-3-tablet.jpg";
import banner3Mobile from "../../assets/images/banner-3-mobile.jpg";

export default function Women() {
  return (
    <div>
      <Banner
        desktopImg={banner3Desktop}
        tabletImg={banner3Tablet}
        mobileImg={banner3Mobile}
        title="Supercomfort. Supernova."
        desc="Elevate your everyday runs with comfort and support of Supernova."
        theme="wht"
      />
    </div>
  );
}
