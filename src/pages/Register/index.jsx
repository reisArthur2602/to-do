import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConnection";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email & !password) return;
    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <Hero>
      <Form>
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

        <ButtonSubmit onClick={(e) => handleRegister(e)}>
          Cadastrar
        </ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Register;
