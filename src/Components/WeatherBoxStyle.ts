import styled from "styled-components";
import { Link } from "react-router-dom";

export const CLink = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr 2fr;
  height: 410px;
  align-items: center;
  background-color: rgb(60, 60, 60);
  padding: 10px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    grid-column: 1/3;
  }
`;

export const TempBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 2/4;
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
      width: 30%;
      height: ${(props: { temp: number }) =>
        (props.temp * 1.5 + 30).toString() + "%"};
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
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      border-radius: 1rem;
      span {
        font-size: 0.8rem;
      }
    }
  }
`;

export const Info = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 20px;
  span {
    font-size: 1.5rem;
    &.icon {
      margin-bottom: 0.7rem;
      font-size: 3rem;
    }
  }
`;
