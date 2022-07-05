import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import TvSeries from "../pages/TvSeries";
import Detail from "../pages/detail/Detail";

import "../scss/style.scss";

function Layout(props) {
  return (
    <div className="main__layout">
      <Header />
      <div className="content__layout">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cinema-app" element={<Home />}></Route>
          <Route path="/movies" element={<Movie />}></Route>
          <Route path="/tv" element={<TvSeries />}></Route>
          <Route path="/:category/:id" element={<Detail />}></Route>
          {/* <Route path="/detail" element={<Detail />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
