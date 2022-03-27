import React, { useState, Component } from "react";
import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import LoginButton from "../LoginButton";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Skate Shop<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas  fa-times" : "fas fa-bars"}>
          {clicked ? <FaTimes /> : <FaBars />}
        </i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Signup</Button>
      <LoginButton></LoginButton>
    </nav>
  );
}

export default Navbar;
