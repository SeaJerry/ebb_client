import React from "react";
import "./Footer.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the newsletter</p>
        <p className="footer-subscription-text">Unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-icons-wrapper">
        <a href="https://www.facebook.com/">
          <FaIcons.FaFacebook />
        </a>
        <a href="https://twitter.com/">
          <AiIcons.AiOutlineTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <AiIcons.AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
