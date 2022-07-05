import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import BgHeader from "../bgHeader/BgHeader";
import classNames from "classnames";
import "./Header.scss";
import { useRef } from "react";
import { useEffect } from "react";

function Header(props) {
  const location = useLocation();
  const path = location.pathname;
  const header = useRef(null);
  useEffect(() => {
    const mainHeader = header.current;
    window.addEventListener("scroll", (e) => {
      let scrollY = window.pageYOffset;
      if (scrollY > 80) {
        mainHeader.classList.add("active");
      } else {
        mainHeader.classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <div className={classNames({ main__header: true })} ref={header}>
        <div className="container">
          <div className="wrapper__header">
            <div className="main__header__logo">
              <img src={require("../../img/cinema__logo.png")} alt="" />
              <Link to="/">Herby Cinema</Link>
            </div>
            <div className="main__header__menu">
              <ul>
                <li className={classNames({ "": true, active: path === "/" })}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={classNames({
                    "": true,
                    active: path.search("movie") > 0,
                  })}
                >
                  <Link to="/movies">Movies</Link>
                </li>
                <li
                  className={classNames({ "": true, active: path === "/tv" })}
                >
                  <Link to="/tv">Tv Series</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BgHeader title={path === "/tv" ? "Tv Series" : "Movies"} />
    </>
  );
}

export default Header;
