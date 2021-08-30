import { useState, useEffect } from "react";
import axios from "axios";
import { CITIES } from "./Citis";
import { IWeather } from "./Types";

function useGetData(): IWeather[] {
  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?",
    params: {
      appid: "b17f3e894d8bf77f4e9b87e1a0ba390f",
      units: "metric",
    },
  });

  const [data, setData] = useState<IWeather[]>([]);

  let arr = [];

  type FetchData = () => void;

  const getData: FetchData = async () => {
    try {
      CITIES.forEach(async (city) => {
        const { data: result } = await api.get("", { params: { q: city } });
        arr = [...arr, result];
        setData(arr);
      });
    } catch {
      console.log("Error in useGetData!!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}

export default useGetData;
