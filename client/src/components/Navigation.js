import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-container">
      <Link to="/">Search</Link>
      <Link to="/api">API</Link>
      <Link to="/flightplanner">Flight Planner</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
