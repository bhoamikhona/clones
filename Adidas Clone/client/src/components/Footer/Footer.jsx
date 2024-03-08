import React from "react";
import FooterBottom from "../../partials/FooterPartials/FooterBottom/FooterBottom.jsx";
import FooterMiddle from "../../partials/FooterPartials/FooterMiddle/FooterMiddle.jsx";
import FooterTop from "../../partials/FooterPartials/FooterTop/FooterTop.jsx";
import FooterMobileBottom from "../../partials/FooterPartials/FooterMobileBottom/FooterMobileBottom.jsx";
import FooterMobileMiddle from "../../partials/FooterPartials/FooterMobileMiddle/FooterMobileMiddle.jsx";
import FooterMobileTop from "../../partials/FooterPartials/FooterMobileTop/FooterMobileTop.jsx";

export default function Footer() {
  return (
    <footer>
      <FooterMobileTop />
      <FooterMobileMiddle />
      <FooterTop />
      <FooterMiddle />
      <FooterMobileBottom />
      <FooterBottom />
    </footer>
  );
}
