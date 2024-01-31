import styled from "styled-components";
import { GrTask } from "react-icons/gr";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperEmpyt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  max-width: 345px;

  p {
    color: #864af9;
    font-size: 1rem;
    font-weight: 400;
    line-height: 140%;
    text-align: center;

    span {
      color: #864af9;
      font-weight: 700;
    }
  }
`;

const Empyt = () => {
  return (
    <Container>
      <WrapperEmpyt>
        <GrTask color="#864af9" size={60}/>
        <p>
          <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e
          organize seus itens a fazer
        </p>
      </WrapperEmpyt>
    </Container>
  );
};

export default Empyt;
