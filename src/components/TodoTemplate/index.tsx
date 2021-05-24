import React from "react";
import styled from "styled-components";

export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  height: 80vh;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #000;
`;
