export interface IWeather {
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
}
