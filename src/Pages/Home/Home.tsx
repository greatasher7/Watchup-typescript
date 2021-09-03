import React from "react";
import { IWeather } from "../../Global/Types";
import useGetData from "./useGetData";
import WeatherBox from "../../Components/WeatherBox";
import { Title, SectionCity } from "./HomeStyle";

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
