import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
  <div className="topnav">
    <Link to="/">Home</Link>
    <Link to="/formik-tutorial">Complete Formik Tutorials</Link>
    <div className="search-container">
      <form action="http://localhost:3000">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
);

export default Header;
