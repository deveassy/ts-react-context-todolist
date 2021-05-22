import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div``;
