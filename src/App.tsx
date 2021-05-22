import React from "react";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoHeader>TODAY's TODOLIST</TodoHeader>
        <TodoForm />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
