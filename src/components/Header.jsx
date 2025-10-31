import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import ME from "../assets/chandu.png";
import HeaderSocials from "./HeaderSocials.jsx";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chandra Kiran Reddy</h1>
        <h5 className="text-light">
          Full Stack Developer | CyberSecurity Enthusiast
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
