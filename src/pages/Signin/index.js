import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  }

  return (
    <div className="Container">
      <label>SISTEMA DE LOGIN</label>
      <div className="Content">
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className="labelError">{error}</label>
        <Button text="Entrar" onClick={handleLogin} />
        <label className="labelSignup">
          Não tem uma conta?
          <strong>
            <Link to="/signup">&nbsp;Registrar-se</Link>
          </strong>
        </label>
      </div>
    </div>
  );
}
