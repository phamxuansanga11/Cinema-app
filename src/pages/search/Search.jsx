import React from "react";
import "./Search.scss";

function Search(props) {
  return (
    <section className="section__search">
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Enter keyword"
        />
        <button className="search__btn">Search</button>
      </div>
    </section>
  );
}

export default Search;
