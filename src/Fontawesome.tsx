import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBolt,
  faCloud,
  faSun,
  faUmbrella,
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBolt,
  faCloud,
  faSun,
  faUmbrella,
  faCloudShowersHeavy,
  faSnowflake
);

export const FilterWeather = (weather: string): any => {
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
