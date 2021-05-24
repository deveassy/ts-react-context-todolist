import React from "react";
import styled from "styled-components";
import { useDispatchContext } from "../../context";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type ItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: ItemProps) {
  const dispatch = useDispatchContext();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };

  return (
    <TodoItemBlock>
      <TodoCheckButton onClick={onToggle}>
        {todo.done ? <CheckImg src="../img/check.png" /> : null}
      </TodoCheckButton>
      <TodoText>{todo.text}</TodoText>
      <TodoRemoveButton onClick={onRemove}>
        <TrashImg src="../img/trash.png" />
      </TodoRemoveButton>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4bad4;
  width: 30vw;
  padding: 10px;
  margin: 20px;
  &:hover {
    & > div > img {
      display: flex;
    }
  }
`;

const TodoCheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
`;

const CheckImg = styled.img`
  width: 12px;
  height: 12px;
`;

const TodoText = styled.p`
  width: 25vw;
  margin: 0 10px;
  cursor: initial;
`;

const TodoRemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const TrashImg = styled.img`
  width: 15px;
  height: 15px;
  display: none;
`;
