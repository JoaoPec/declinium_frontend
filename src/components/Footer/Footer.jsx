import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <p>&copy; 2024 Declinium RPG. Todos os direitos reservados.</p>
        </div>
        <div className={classes.center}>
          <a
            href="https://www.youtube.com/@auroradocaosrpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
        <div className={classes.right}>
          <p>Contato: contato@decliniumrpg.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
