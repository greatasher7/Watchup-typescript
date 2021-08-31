import React from "react";
import styled from "styled-components";
import { CityProps } from "../Routes/Types";

const Container = styled.article`
  height: 400px;
  align-items: center;
  h4 {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
  }
  p {
  }
`;

function WeatherBox(props: CityProps): JSX.Element {
  console.log("good", props);
  return (
    <Container>
      <h4>{props.name}</h4>
      <p>{props.temp}</p>
    </Container>
  );
}

export default WeatherBox;
