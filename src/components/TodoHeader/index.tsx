import React from "react";
import styled from "styled-components";

type HeaderProps = {
  children: React.ReactNode;
};

export default function TodoHeader(props: HeaderProps) {
  const { children } = props;
  return (
    <TodoHeaderBlock>
      <TodolistTitle>{children}</TodolistTitle>
      <UncheckedTodo>You still have 2 left</UncheckedTodo>
    </TodoHeaderBlock>
  );
}

const TodoHeaderBlock = styled.header`
  height: 10vw;
`;
const TodolistTitle = styled.h1``;
const UncheckedTodo = styled.div``;
