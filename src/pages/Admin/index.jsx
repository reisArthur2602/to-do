import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import Tasklist from "../../components/Tasklist";
import CountTask from "../../components/CountTask";
import Empyt from "../../components/Empyt";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

const Container = styled.section`
  max-width: 52.8125rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
const FormTask = styled.form`
  display: flex;
  gap: 0.5rem;
`;
const InputTask = styled.input`
  flex: 1;
  background-color: #3b3486;
  color: #ffe9b1;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  font-size: 1rem;

  &::placeholder {
    color: #ffe9b1;
  }
`;
const ButtonTask = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: #864af9;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  border: 0;
  cursor: pointer;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const WrapperCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #333;
`;

const TasklistContainer = styled.div`
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Admin = () => {
  const [task, setTask] = useState("");
  const [UserLS, setUserLS] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      const data = localStorage.getItem("@dataUser");
      setUserLS(JSON.parse(data));
    };
    loadTask();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (task !== "") {
      await addDoc(collection(db, "tarefas"), {
        tarefa: task,
        created: new Date(),
        userUid: UserLS?.uid,
      })
        .then(() => console.log("Tarefa cadastrada com sucesso"))
        .catch((err) => console.log("Erro ao cadastrar tarefa" + err));
    }
  };

  return (
    <Hero>
      <Container>
        <FormTask onSubmit={createTask}>
          <InputTask
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <ButtonTask type="submit">
            Criar
            <IoIosAddCircleOutline size={25} color="white" />
          </ButtonTask>
        </FormTask>

        <FlexContainer>
          <WrapperCount>
            <CountTask text="Tarefas Criadas" />
            <CountTask text="Concluídas" />
          </WrapperCount>

          <TasklistContainer>
            <Tasklist
              icon={<FaRegCheckCircle size={24} color="#864AF9" />}
              text="Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer."
            />
          </TasklistContainer>
        </FlexContainer>
      </Container>
    </Hero>
  );
};

export default Admin;
