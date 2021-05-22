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
  justify-content: center;
  align-items: center;
`;
