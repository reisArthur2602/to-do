import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { useState } from "react";

import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashCan, FaRegCircle } from "react-icons/fa6";

const TasklistContainer = styled.div`
  background-color: #3b3486;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;

  button {
    display: flex;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const TextTask = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  max-width: 46.25rem;
  width: 100%;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#FFE9B1" : "#fff")};
 
`;

const Tasklist = ({ text, id, isCompleted }) => {
  let complete = isCompleted;

  const handleDelete = async (id) => {
    const TaskRef = doc(db, "tarefas", id);
    await deleteDoc(TaskRef);
  };

  const handleComplete = async (id) => {
    const TaskRef = doc(db, "tarefas", id);
    await updateDoc(TaskRef, {
      completa: !complete,
    });
  };

  return (
    <TasklistContainer>
      <button onClick={() => handleComplete(id)}>
        {complete ? (
          <FaRegCheckCircle size={22} color="#864AF9" />
        ) : (
          <FaRegCircle size={22} color="#864AF9" />
        )}
      </button>
      <TextTask completed={complete}>{text}</TextTask>
      <button onClick={() => handleDelete(id)}>
        <FaRegTrashCan size={20} color="#FFE9B1" />
      </button>
    </TasklistContainer>
  );
};

export default Tasklist;
