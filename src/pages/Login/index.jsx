import { Form } from "../../components/Form";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Hero } from "../../components/Hero";

const Login = () => {
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
        />
        <Input
          title="Senha"
          type="password"
          placeholder="Insira o sua senha"
          icon={<IoLockClosedOutline size={18} color="#Fff" />}
        />

        <ButtonSubmit>Login</ButtonSubmit>
      </Form>
    </Hero>
  );
};

export default Login;
