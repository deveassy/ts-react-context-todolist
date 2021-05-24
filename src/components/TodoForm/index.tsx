import React, { useState } from "react";
import styled from "styled-components";
import { useDispatchContext } from "../../context";

export default function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === "") return;
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };

  return (
    <TodoFormBlock onSubmit={onSubmit}>
      <TodoInput
        placeholder="I need to"
        onChange={handleChange}
        value={value}
      />
      <TodoSubmitButton type="submit">ADD</TodoSubmitButton>
    </TodoFormBlock>
  );
}

const TodoFormBlock = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TodoInput = styled.input`
  width: 20vw;
  padding: 10px;
  margin: 0 20px;
`;

const TodoSubmitButton = styled.button`
  padding: 20px;
  border: 0;
  border-radius: 10px;
  background-color: #f3d9fa;
  cursor: pointer;
`;
