import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="main__footer">
      <img src={require("../../img/footer-bg.jpg")} alt="footer" />
      <div className="main__footer__content">
        <div className="main__footer__content-logo">
          <img src={require("../../img/cinema__logo.png")} alt="" />
          <Link to="/">Herby Movies</Link>
        </div>
        <div className="main__footer__content-menu">
          <div className="menu__link">
            <div className="menu__link-option">
              <a href="/">Home</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Contact</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Term of services</a>
            </div>
            <div className="menu__link-option">
              <a href="/">About us</a>
            </div>
          </div>
          <div className="menu__link">
            <div className="menu__link-option">
              <a href="/">Live</a>
            </div>
            <div className="menu__link-option">
              <a href="/">FAQ</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Premium</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Pravacy policy</a>
            </div>
          </div>
          <div className="menu__link">
            <div className="menu__link-option">
              <a href="/">You must watch</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Recent release</a>
            </div>
            <div className="menu__link-option">
              <a href="/">Top IMDB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
