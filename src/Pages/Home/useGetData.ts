import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CITIES } from "./CityList";
import { IWeatherData } from "../../Global/Types";

function useGetData(): IWeatherData[] {
  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?",
    params: {
      appid: "cb84b79207003fda05f58a7f387d50c0",
      units: "metric",
    },
  });

  const interval = useRef<ReturnType<typeof setInterval>>();

  const [data, setData] = useState<IWeatherData[]>([]);

  // 각 도시의 데이터를 담을 배열
  let arr: IWeatherData[] = [];

  type FetchData = () => void;
  const getData: FetchData = async () => {
    try {
      for (let i = 0; i < CITIES.length; i++) {
        const { data: result } = await api.get("", {
          params: { q: CITIES[i] },
        });
        arr[i] = result;
      }
      setData(arr);
    } catch {
      console.log("Error in useGetData!!");
    } finally {
      arr = [];
    }
  };

  useEffect(() => {
    getData();
    interval.current = setInterval(() => {
      getData();
    }, 5000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return data;
}

export default useGetData;
