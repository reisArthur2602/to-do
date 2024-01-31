import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TextCount = styled.p`
  color: #ffe9b1;
  font-size: 0.875rem;
  font-weight: 700;
`;

const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  color: white;
  background-color: #333333;
`;

const CountTask = ({ text, count }) => {
  return (
    <Wrapper>
      <TextCount>{text}</TextCount>
      <Count>{count ? count : 0}</Count>
    </Wrapper>
  );
};

export default CountTask;
