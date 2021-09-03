import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IPropsMatch } from "../../Global/Types";

function Detail({ match }: RouteComponentProps<IPropsMatch>): JSX.Element {
  console.log("");
  return <h1>Detail pages {match.params.id}</h1>;
}

export default Detail;
