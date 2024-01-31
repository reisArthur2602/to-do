import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import Input from "../../components/Input";
import { ButtonSubmit } from "../../components/ButtonSubmit";

import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {

   e.preventDefault()
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // navegar para /admin
          navigate("/admin", { replace: true });
        })
        .catch((err) => console.log("Erro ao fazer login" + err));
    }
  };

  return (
    <Hero>
      <Form onSubmit={handleLogin}>
        <h2>Login👋</h2>
        <p>
          Ainda não possui uma conta ? Você pode se{" "}
          <Link to="/register">Cadastrar aqui!</Link>
        </p>

        <Input
          title="Email"
          type="email"
          placeholder="Insira o seu endereço de email"
          icon={<AiOutlineMail size={18} color="#Fff" />}
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Senha"
          type="password"
          placeholder="Insira o sua senha"
          icon={<IoLockClosedOutline size={18} color="#Fff" />}
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />

        <ButtonSubmit type="submit">Login</ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Login;
