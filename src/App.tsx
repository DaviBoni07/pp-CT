import React from "react";
import "./indexlogin.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./login";
import Detalhedeclientes from "./detalhedeclientes";
import Cadastro from "./cadastro";
import AtendimentolistadeCVT from "./Atendimento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalhedeclientes" element={<Detalhedeclientes />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Atendimento" element={<AtendimentolistadeCVT />} />
      </Routes>
    </Router>
  );
}

export default App;
