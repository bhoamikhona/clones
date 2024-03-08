import React from "react";
import HeaderTop from "../../partials/HeaderPartials/HeaderTop/HeaderTop.jsx";
import HeaderMiddle from "../../partials/HeaderPartials/HeaderMiddle/HeaderMiddle.jsx";
import HeaderBottom from "../../partials/HeaderPartials/HeaderBottom/HeaderBottom.jsx";

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}
