import React from "react";

const menuList = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {menuList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
