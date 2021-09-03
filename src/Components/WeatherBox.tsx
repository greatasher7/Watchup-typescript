import React from "react";
import { IPropsWeatherBox } from "../Global/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Global/Fontawesome";
import { CLink, TempBox, Info } from "./WeatherBoxStyle";

const FilterWeather = (weather: string) => {
  switch (weather) {
    case "Clear":
      return "sun";
    case "Clouds":
      return "cloud";
    case "Rain":
      return "umbrella";
    case "Thunderstorm":
      return "bolt";
    case "Snow":
      return "snowflake";
    default:
      return "sun";
  }
};

function WeatherBox(props: IPropsWeatherBox): JSX.Element {
  console.log("good", props);
  return (
    <CLink to={`/city-detail/${props.name}`}>
      <h3>{props.name}</h3>
      <TempBox temp={props.temp}>
        <div className="barContainer">
          <div className="bar">
            <span>{props.temp}°C</span>
          </div>
        </div>
        <h4>Temperature</h4>
      </TempBox>
      <Info>
        <span className="icon">
          <FontAwesomeIcon
            className="weatherIcon"
            icon={props.weather ? FilterWeather(props.weather) : "bolt"}
          />
        </span>
        <span> {props.weather}</span>
      </Info>
    </CLink>
  );
}

export default WeatherBox;
