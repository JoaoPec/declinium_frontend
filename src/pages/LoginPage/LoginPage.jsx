import React from "react";
import { Link } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Login</h1>
        <form className={classes.form}>
          <div className={classes.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <div className={classes.buttons}>
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div className={classes.message}>
          <p>
            Não tem conta? <Link to="/register">Registre-se</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
