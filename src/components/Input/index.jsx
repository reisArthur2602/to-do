import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;
  padding-bottom: 0.4375rem;
  border-bottom: 2px solid white;
`;

const InputCustomer = styled.input`
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
  flex: 1;
`;

const Label = styled.label`
  color: #fff;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;

const Input = ({ title, type, placeholder, icon, value, onchange }) => {
  return (
    <InputContainer>
      <Label>{title}</Label>
      <Wrapper>
        {icon}
        <InputCustomer
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          required
        />
      </Wrapper>
    </InputContainer>
  );
};

export default Input;
