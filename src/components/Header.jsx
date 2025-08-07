import React from "react";
import Nav from "./Nav";
import LogoIcon from "../assets/icons/LogoIcon.svg";

const Header = () => {
  return (
    <header>
      <img src={LogoIcon} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};

export default Header;
