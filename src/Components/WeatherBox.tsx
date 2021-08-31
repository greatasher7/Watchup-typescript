import React from "react";
import styled from "styled-components";
import { CityProps } from "../Routes/Types";

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 4fr;
  height: 400px;
  align-items: center;
  background-color: rgb(60, 60, 60);
  padding: 10px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    grid-column: 1/4;
  }
`;

const TempBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    padding: 20px 0;
  }
  .barContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .bar {
      width: 60%;
      height: ${(props: { temp: number }) =>
        (props.temp + 30).toString() + "%"};
      background-color: ${(props: { temp: number }) =>
        props.temp > 30
          ? "#91320d"
          : props.temp > 20
          ? "#8d650f"
          : props.temp > 10
          ? "#737a12"
          : props.temp > 0
          ? "#4b6b21"
          : "#294163"};
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 10px;
      border-radius: 1rem;
      span {
        font-size: 0.9rem;
      }
    }
  }
`;

function WeatherBox(props: CityProps): JSX.Element {
  console.log("good", props);
  return (
    <Container>
      <h3>{props.name}</h3>
      <TempBox temp={props.temp}>
        <h4>Temperature</h4>
        <div className="barContainer">
          <div className="bar">
            <span>{props.temp}°C</span>
          </div>
        </div>
      </TempBox>
    </Container>
  );
}

export default WeatherBox;
