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
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };

  return (
    <TodoFormBlock>
      <FormContainer onSubmit={onSubmit}>
        <TodoInput
          placeholder="I need to"
          onChange={handleChange}
          value={value}
        />
        <TodoSubmitButton type="submit">ADD</TodoSubmitButton>
      </FormContainer>
    </TodoFormBlock>
  );
}

const TodoFormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form``;

const TodoInput = styled.input`
  width: 20vw;
  padding: 5px;
`;

const TodoSubmitButton = styled.button``;
