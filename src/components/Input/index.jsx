import React from "react";
import { InputContainer, InputCustomer } from "./styles";

const Input = ({ title, type, placeholder, icon }) => {
  return (
    <InputContainer>
      <label>{title}</label>
      <div>
        {icon}
        <InputCustomer type={type} placeholder={placeholder} />
      </div>
    </InputContainer>
  );
};

export default Input;
