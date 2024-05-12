import React from "react";
import "./indexlogin.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="conteiner">
      <div className="wrapper">
        <img src="/images/sesoverde.png" id="seso" alt="Logo Verde" />
        <div id="sinergia">
          <p>Sinergia Elevadores Sistema de Operações</p>
        </div>
        <form>
          <div className="input-box">
            <img src="/images/user_icon.png" id="user" alt="user"></img>
            <input
              type="text"
              placeholder="Nome de Usuário"
              required
              id="inputnome"
            />
          </div>
          <div className="input-senha">
            <img src="/images/lock_icon.png" id="lock" alt="lock"></img>
            <input
              type="password"
              placeholder="Senha"
              required
              id="inputsenha"
            />
          </div>
          <Link to="/detalhesdeclientes">
            <button type="submit" id="button">
              Fazer Login
            </button>
          </Link>
        </form>
        <p id="ainda">
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro" id="cadastre-se">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
