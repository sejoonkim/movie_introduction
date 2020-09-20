import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link className="nav__btn nav__btn1" to="/">
        Home
      </Link>
      <Link className="nav__btn nav__btn2" to="/movies">
        Movies
      </Link>
    </div>
  );
}

export default Navigation;
