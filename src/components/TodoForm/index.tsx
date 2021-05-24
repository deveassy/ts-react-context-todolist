import React, { useState } from "react";
import styled from "styled-components";

export default function TodoForm() {
  return (
    <TodoFormBlock>
      <FormContainer>
        <TodoInput placeholder="I need to" />
        <TodoSubmitButton type="submit">ADD</TodoSubmitButton>
      </FormContainer>
    </TodoFormBlock>
  );
}

const TodoFormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form``;

const TodoInput = styled.input`
  width: 20vw;
  padding: 5px;
`;

const TodoSubmitButton = styled.button``;
