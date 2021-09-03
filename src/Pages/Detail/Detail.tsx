import React from "react";
import { RouteComponentProps } from "react-router-dom";

function Detail(props: RouteComponentProps): JSX.Element {
  console.log(props);
  return <h1>Detail pages {props.match.params.id}</h1>;
}

export default Detail;
