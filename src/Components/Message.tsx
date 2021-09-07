import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 1.2rem;
`;

const Message = (props: { title: string; color?: string }): JSX.Element => (
  <Container>
    <Text color={props.color}>{props.title}</Text>
  </Container>
);

export default Message;
