import React from "react";
import CV from "../assets/ChandraKiranReddy_Developer.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
          Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
