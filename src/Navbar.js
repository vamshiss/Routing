import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <link to="/">
          {" "}
          <li>Home </li>
        </link>
        <link to="/dashboard">
          {" "}
          <li>dashboard </li>
        </link>
        <link to="/profile">
          {" "}
          <li>profile</li>
        </link>
      </ul>
    </div>
  );
};
export default Navbar;
