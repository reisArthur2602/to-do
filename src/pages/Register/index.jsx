import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import { Link, useNavigate } from "react-router-dom";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import Input from "../../components/Input";

import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch((err) => console.log("Erro ao fazer cadastro" + err));
    }
  };

  return (
    <Hero>
      <Form onSubmit={handleRegister}>
        <h2>Cadastrar-se👋</h2>
        <p>
          Já possui uma conta? Você pode fazer <Link to="/">Login aqui !</Link>
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

        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Register;
