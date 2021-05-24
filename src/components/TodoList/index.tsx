import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";
import { useStateContext } from "../../context";

export default function TodoList() {
  const todos = useStateContext();
  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.ul``;
