import React, { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <a href="/">Logo</a>
        </div>
        <ul
          className={`${classes.navLinks} ${
            isMobileMenuOpen ? classes.mobileMenuOpen : ""
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@auroradocaosrpg">
              Conheça Aurora do Caos
            </a>
          </li>
          <li>
            <a href="">Gerenciamento de fichar</a>
          </li>
          <li>
            <a href="/register">Cadastrar-se</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <div className={classes.mobileMenuIcon} onClick={toggleMobileMenu}>
          <i
            className={isMobileMenuOpen ? "ri-close-fill" : "ri-menu-fill"}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
