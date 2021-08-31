import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Data(): JSX.Element {
  const [data, setData] = useState("data");

  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?",
    params: {
      appid: "b17f3e894d8bf77f4e9b87e1a0ba390f",
      units: "metric",
    },
  });

  type FetchData = (code: string) => any;

  const getData: FetchData = async () => {
    try {
      console.log("try");
      const result: any = await api.get("", { params: { q: "Seoul" } });
      setData(result.data);
      console.log(data);
    } catch {
      console.log("Error!!");
    }
  };

  useEffect(() => {
    getData("005930");
    console.log(data);
  }, []);

  return (
    <>
      <Link to="/">Go to Home</Link>
      <h1>This is the data route</h1>
      <p>after modify the package.json</p>
      {data ? JSON.stringify(data) : "ssd"}
    </>
  );
}

export default Data;
