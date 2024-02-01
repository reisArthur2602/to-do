import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import Tasklist from "../../components/Tasklist";
import CountTask from "../../components/CountTask";
import Empyt from "../../components/Empyt";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../services/firebaseConnection";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";

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
  @media screen and (max-width: 26.25rem) {
    flex-direction: column;
    justify-content: center;
  }
`;
const InputTask = styled.input`
  max-width: 46.6875rem;
  width: 100%;
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
  min-width: 90px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

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
  const [taskInput, setTaskInput] = useState("");
  const [UserLS, setUserLS] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const loadTask = async () => {
      const data = JSON.parse(localStorage.getItem("@dataUser"));
      setUserLS(data);

      if (data) {
        const taskRef = collection(db, "tarefas");
        const q = query(
          taskRef,
          orderBy("created", "desc"),
          where("userUid", "==", data?.uid)
        );

        const unsub = onSnapshot(q, (snapshot) => {
          let list = [];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid,
              completa: doc.data().completa,
              created: doc.data().created,
            });
          });

          setTasks(list);
        });
      }
    };

    loadTask();
  }, []);

  useEffect(() => {
    const filter = tasks.filter((task) => task.completa === true);
    setCompletedTasks(filter);
  }, [tasks]);

  const createTask = async (e) => {
    e.preventDefault();
    if (taskInput !== "") {
      await addDoc(collection(db, "tarefas"), {
        tarefa: taskInput,
        created: new Date(),
        userUid: UserLS?.uid,
        completa: false,
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
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <ButtonTask type="submit">
            Criar
            <IoIosAddCircleOutline size={25} color="white" />
          </ButtonTask>
        </FormTask>

        <FlexContainer>
          <WrapperCount>
            <CountTask text="Tarefas Criadas" count={tasks.length} />
            <CountTask text="Concluídas" count={completedTasks.length} />
          </WrapperCount>

          <TasklistContainer>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Tasklist
                  text={task.tarefa}
                  id={task.id}
                  isCompleted={task.completa}
                  key={task.id}
                />
              ))
            ) : (
              <Empyt />
            )}
          </TasklistContainer>
        </FlexContainer>
      </Container>
    </Hero>
  );
};

export default Admin;
