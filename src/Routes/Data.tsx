import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = (props) => {
  const [data, setData] = useState();

  type FetchData = (code: string) => any;

  const getData: FetchData = async (code) => {
    try {
      console.log("try");
      const result: any = await axios.get(
        `http://asp1.krx.co.kr/servlet/krx.asp.XMLJemuEng?code=${code}`
      );
      setData(result);
      console.log("data is ...", data);
    } catch {}
  };

  useEffect(() => {
    console.log("hello");
    getData("005930");
    console.log("data is ...", data);
  }, []);

  return (
    <>
      <h1>This is the data route</h1>
      <p>after modify the package.json</p>
    </>
  );
};

export default Data;
