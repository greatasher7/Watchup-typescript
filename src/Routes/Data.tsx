import React, { useState, useEffect } from "react";
import axios from "axios";

function Data (): JSX.Element {
  const [data, setData] = useState("data");

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2aba01b0fce18e86ed1cee2e83403b06",
        language: "en-US"
    } 
  });  
  
  type FetchData = (code: string) => any;

  const getData: FetchData = async (code) => {
    try {
      console.log("try");
      const result: any = await api.get("/movie/now_playing", {params:{page: 1, limit: 50}});
      setData(result);
    } catch {
      console.log('Error!!');
    }
  };

  
  // useEffect(() => {
  //   getData("005930");
  //   console.log(data);
  // }, []);

  return (
    <>
      <h1>This is the data route</h1>
      <p>after modify the package.json</p>
      {data ? data : "ssd"}
    </>
  );
};

export default Data;
