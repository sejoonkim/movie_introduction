import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </div>
  );
}

export default Navigation;
