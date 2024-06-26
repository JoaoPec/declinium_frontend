import React from "react";
import Logo from "../../assets/decliniumLogo.png";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <h1>Bem vindo ao Declinium RPG</h1>
          <img src={Logo} alt="Logo" />
          <p>
            Este é o nosso site dedicado à criação de fichas no sistema
            Declinium RPG, sistema este que surgiu a partir da campanha “A
            aurora do Caos”
          </p>
          <div className={classes.buttons}>
            <a href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>Registre-se</button>
            </a>
          </div>
        </div>{" "}
      </main>
    </>

  );
};

export default MainPage;
