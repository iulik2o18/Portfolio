import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav className="navbar">
        <Bars />
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "Bestermind",
            margin: "10px",
          }}
        >
          Iulian Portfolio
        </h1>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
