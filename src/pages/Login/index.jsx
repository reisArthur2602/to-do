import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import Input from "../../components/Input";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConnection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) return;
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <Hero>
      <Form>
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

        <ButtonSubmit onClick={(e) => handleLogin(e)}>Login</ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Login;
