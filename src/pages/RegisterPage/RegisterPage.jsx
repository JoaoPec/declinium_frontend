import React from "react";
import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1>Register</h1>
        <form className={classes.form}>
          <div className={classes.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" />
          </div>
          <div className={classes.buttons}>
            <button type="submit">Registrar</button>
          </div>
        </form>
        <div className={classes.message}>
          <p>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
