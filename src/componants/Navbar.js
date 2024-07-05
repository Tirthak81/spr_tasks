import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Search">1.Search</Link>
      </li>
      <li>
        <Link to="/Counter">2.Counter</Link>
      </li>
      <li>
        <Link to="/List">3.List</Link>
      </li>
      <li>
        <Link to="/Imgslider">4.Imgslider</Link>
      </li>
      <li>
        <Link to="/Checklist">5.Checklist</Link>
      </li>
      <li>
        <Link to="/Login">6.Login</Link>
      </li>
    </ul>
  );
}

export default Navbar;
