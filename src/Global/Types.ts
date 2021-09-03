export interface IWeatherData {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  id: number;
  wind: {
    speed: number;
    deg: number;
  };
}

export interface IPropsWeatherBox {
  name: string;
  temp: number;
  weather: string;
  windSpeed: number;
}

export interface IPropsMatch {
  id: string;
}
