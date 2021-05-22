import React from "react";
import styled from "styled-components";

export default function TodoHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TodoHeaderBlock>
      <TodolistTitle>{children}</TodolistTitle>
      <UncheckedTodo>You still have 2 left</UncheckedTodo>
    </TodoHeaderBlock>
  );
}

const TodoHeaderBlock = styled.header``;
const TodolistTitle = styled.h1``;
const UncheckedTodo = styled.div``;
