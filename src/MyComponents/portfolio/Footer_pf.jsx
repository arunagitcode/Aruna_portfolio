import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer_pf() {
  return (
    <footer className="footer-section mt-4">
      <div className="footer-container">
        <h2 className="footer-logo">
          Atchiyamma <span>Portfolio</span>
        </h2>

        <p className="footer-tagline">
          Crafting engaging, responsive, and visually beautiful web interfaces.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-copy">© 2025 Atchiyamma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer_pf;
