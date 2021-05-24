import React from "react";
import styled from "styled-components";
import { useStateContext } from "../../context";

type HeaderProps = {
  children: React.ReactNode;
};

export default function TodoHeader(props: HeaderProps) {
  const { children } = props;

  const todos = useStateContext();
  const undones = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <TodoHeaderBlock>
      <TodolistTitle>{children}</TodolistTitle>
      <Today>{dateString}</Today>
      <UncheckedTodo>
        You still have to do&nbsp;<Number>{undones.length}</Number>&nbsp;left
      </UncheckedTodo>
    </TodoHeaderBlock>
  );
}

const TodoHeaderBlock = styled.header`
  height: 20vh;
`;
const TodolistTitle = styled.h1``;

const Today = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 23px;
  margin: -10px 0;
`;

const Number = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: purple;
`;
const UncheckedTodo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
