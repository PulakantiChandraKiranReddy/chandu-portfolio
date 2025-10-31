import React from "react";
import "./About.css";
import ME from "../assets/chandu_DP.jpg";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certificate</h5>
              <small>Microsoft Cyber Security Analysist</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            Detail-oriented Full Stack Developer with experience in building
            scalable and interactive web applications. Skilled in React,
            Node.js, Python, and databases, with a strong focus on performance
            and clean architecture. Developed projects like a real-time
            financial dashboard, bus route visualization platform, and a
            blockchain-based certificate verification system. Passionate about
            learning modern technologies and delivering efficient, user-centered
            solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
