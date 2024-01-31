import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashCan, FaRegCircle  } from "react-icons/fa6";


const TasklistContainer = styled.div`
  background-color: #3b3486;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    max-width: 46.25rem;
    width: 100%;
  }

  svg {
    cursor: pointer;
  }
`;

const Tasklist = ({icon,text}) => {
  return (
    <TasklistContainer>
     {icon}
      <p>
        {text}
      </p>
      <FaRegTrashCan size={20} color="#FFE9B1" />
    </TasklistContainer>
  );
};

export default Tasklist;
