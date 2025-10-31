import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Know</h5>
      <h2>Learning and Achievement</h2>

      <div className="container services__containter">
        {/* Full-Stack Development */}
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>React.js & Next.js for frontend development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Node.js & Express.js for backend APIs</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Database Management with MySQL & Supabase</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Docker, Kubernetes, AWS ECS & EKS deployment</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Version control with Git & GitHub</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>REST API integration & data pipelines</p>
            </li>
          </ul>
        </article>

        {/* Cybersecurity & Ethical Hacking */}
        <article className="service">
          <div className="service__head">
            <h3>Cybersecurity & Ethical Hacking</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Network Security & Risk Management</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Penetration Testing & Vulnerability Assessment (VAPT)</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Tools: Nmap, Wireshark, Metasploit, BurpSuite</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Kali Linux & Windows Server administration</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Web Security & Cryptography fundamentals</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Ethical Hacking certifications (Coursera, Udemy)</p>
            </li>
          </ul>
        </article>

        {/* Blockchain & Smart Contracts */}
        <article className="service">
          <div className="service__head">
            <h3>Blockchain & Smart Contracts</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Solidity smart contract development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Truffle & Ganache for testing & deployment</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Certificate issuance & verification systems</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Understanding of blockchain architecture & dApps</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Designing responsive web interfaces with React.js</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Creating reusable UI components for consistency</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Prototyping and wireframing using Figma & Canva</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Optimizing user experience and accessibility standards</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
