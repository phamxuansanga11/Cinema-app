import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import BgHeader from "../bgHeader/BgHeader";
import "./Header.scss";

function Header(props) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Fragment>
      <div className="main__header">
        <div className="container">
          <div className="wrapper__header">
            <div className="main__header__logo">
              <img src={require("../../img/cinema__logo.png")} alt="" />
              <Link to="/">Herby Cinema</Link>
            </div>
            <div className="main__header__menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/tv">Tv Series</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BgHeader title={path === "/tv" ? "Tv Series" : "Movies"} />
    </Fragment>
  );
}

export default Header;
