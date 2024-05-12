import React from "react";
import { Link } from "react-router-dom";
import "./indexcadastro.css";
function Cadastro() {
  return (
    <div className="conteiner">
      <div className="wrapper">
        <img src="/images/sesoverde.png" id="seso1" alt="Logo Verde" />
        <div id="sinergia1">
          <p>Sinergia Elevadores Sistema de Operações</p>
        </div>
        <form>
          <div className="input0">
            <input
              type="text"
              placeholder="Nome Completo"
              required
              id="nomecompleto"
            ></input>
          </div>
          <div className="input1">
            <input
              type="text"
              placeholder="Nome de Usuário"
              required
              id="inputnome1"
            />
          </div>
          <div className="input2">
            <input
              type="password"
              placeholder="Senha"
              required
              id="inputsenha1"
            />
          </div>
          <Link to="/detalhesdeclientes">
            <button type="submit" id="botao">
              Criar Conta
            </button>
          </Link>
        </form>

        <p id="já">
          Já possui uma conta?{" "}
          <Link to="/cadastro" id="login">
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Cadastro;
