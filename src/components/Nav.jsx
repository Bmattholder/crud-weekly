import React from "react";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
    </div>
  );
}

export default Nav;
