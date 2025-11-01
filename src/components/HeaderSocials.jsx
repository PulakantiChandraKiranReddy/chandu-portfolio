import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/chandra-kiran-reddy-258b94257/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/PulakantiChandraKiranReddy" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/chandu.reddy20?igsh=MTVqZzhtcjBqamptNA==">
        <FaInstagram />
      </a>
      <a href="https://discord.gg/kURF5bh9">
        <RiDiscordLine />
      </a>
    </div>
  );
};

export default HeaderSocials;
