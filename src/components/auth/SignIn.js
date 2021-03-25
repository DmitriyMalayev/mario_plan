import React from "react";
import { NavLink } from "react-router-dom"; //Provides access to active class

const SignIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink className="/">New Project</NavLink>
        <NavLink className="/">Log Out</NavLink>
        <NavLink className="/">DM</NavLink>
      </li>
    </ul>
  );
};

export default SignIn;
