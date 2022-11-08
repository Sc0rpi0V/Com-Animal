import React from 'react';
import "./style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <h1>All link if you need information</h1>
       <p>&copy; Boury Valentin - 2022</p>
        <a href="https://www.linkedin.com/in/valentin-boury-b716a31b6/"
          className="Linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/BboyVal/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/bouryvalentin" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.tiktok.com/@sc0rpi0v?lang=fr"
          className="Tiktok social">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;