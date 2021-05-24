import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader>TODAY's TODOLIST</TodoHeader>
        <TodoForm />
        <TodoList />
      </TodoTemplate>
    </AppWrapper>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ccc;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
