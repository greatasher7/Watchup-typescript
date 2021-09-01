import React from "react";
import styled from "styled-components";
import { IWeather } from "./Types";
import useGetData from "./useGetData";
import WeatherBox from "../Components/WeatherBox";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin: 2rem 0;
  color: #c4c5ac;
`;

const SectionCity = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;

function Home(): JSX.Element {
  const result = useGetData();

  return (
    <>
      <Title>Worldwide Weather</Title>
      <SectionCity>
        {!result
          ? "no data"
          : result.map((region: IWeather) => (
              <WeatherBox
                key={region.id}
                name={region.name}
                temp={region.main.temp}
                weather={region.weather[0].main}
                windSpeed={region.wind.speed}
              />
            ))}
      </SectionCity>
    </>
  );
}

export default Home;
