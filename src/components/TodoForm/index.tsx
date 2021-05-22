import React from "react";
import styled from "styled-components";

export default function TodoForm() {
  return (
    <TodoFormBlock>
      <TodoInput />
      <TodoSubmitButton>ADD</TodoSubmitButton>
    </TodoFormBlock>
  );
}

const TodoFormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoInput = styled.input``;

const TodoSubmitButton = styled.button``;
