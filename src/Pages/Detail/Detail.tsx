import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IPropsMatch } from "../../Global/Types";
import { Container, CityName, Contents } from "./DetailStyle";

function Detail({ match }: RouteComponentProps<IPropsMatch>): JSX.Element {
  console.log("");
  return (
    <Container>
      <CityName>City: {match.params.id}</CityName>
      <Contents></Contents>
    </Container>
  );
}

export default Detail;
