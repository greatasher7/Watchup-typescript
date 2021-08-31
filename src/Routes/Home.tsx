import React from "react";
import styled from "styled-components";
import { IWeather } from "./Types";
import useGetData from "./useGetData";
import WeatherBox from "../Components/WeatherBox";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-bottom: 100px;
`;

const SectionCity = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

function Home(): JSX.Element {
  const result = useGetData();

  return (
    <>
      <Title>this is main page</Title>
      <SectionCity>
        {!result
          ? "no data"
          : result.map((region: IWeather) => (
              <WeatherBox
                key={region.id}
                name={region.name}
                temp={region.main.temp}
              />
            ))}
      </SectionCity>
    </>
  );
}

export default Home;
