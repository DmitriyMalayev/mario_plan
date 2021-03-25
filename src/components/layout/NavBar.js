import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignedInLinks"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Mario Plan
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
