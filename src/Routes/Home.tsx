import React from "react";
// react-router-dom에서 제공하는 props의 type
import { RouteComponentProps } from "react-router-dom";
import { IWeather } from "./Types";
import useGetData from "./useGetData";

function Home(props: RouteComponentProps): JSX.Element {
  const result = useGetData();
  console.log("result at home", result);

  return (
    <>
      <h1>this is main page</h1>
      <p>
        Temperature of Seoul :{" "}
        {!result
          ? "no data"
          : result.map((region: IWeather, i: number) => {
              return (
                <span key={i}>
                  {region.main.temp}
                  {region.name}
                </span>
              );
            })}
      </p>
    </>
  );
}

export default Home;
