import React from "react";
import styled from "styled-components";

export default function TodoItem() {
  return (
    <TodoItemBlock>
      <TodoCheckButton></TodoCheckButton>
      <TodoText>I have to do something today.</TodoText>
      <TodoRemoveButton></TodoRemoveButton>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoCheckButton = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid #000;
`;

const TodoText = styled.p``;

const TodoRemoveButton = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid #000;
`;
