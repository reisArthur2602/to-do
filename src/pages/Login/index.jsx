import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import Input from "../../components/Input";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onchange={(e)=>setEmail(e.target.value)}
        />
        <Input
          title="Senha"
          type="password"
          placeholder="Insira o sua senha"
          icon={<IoLockClosedOutline size={18} color="#Fff" />}
          value={password}
          onchange={(e)=>setPassword(e.target.value)}
        />

        <ButtonSubmit>Login</ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Login;
