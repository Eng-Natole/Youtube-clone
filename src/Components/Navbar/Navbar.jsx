import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
