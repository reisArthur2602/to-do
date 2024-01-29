import React from "react";
import { InputCustomer } from "./styles";

const Input = ({ title, type, placeholder, icon }) => {
  return (
    <InputCustomer>
      <label>{title}</label>
      <div>
        {icon}
        <input type={type} placeholder={placeholder} />
      </div>
    </InputCustomer>
  );
};

export default Input;
