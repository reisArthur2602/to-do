import styled from "styled-components";

const InputCustomer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;
  padding-bottom: 0.4375rem;
  border-bottom: 2px solid white;

  label {
    color: #fff;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > div {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }

  input {
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    flex: 1;
  }


 
`;

export { InputCustomer };
