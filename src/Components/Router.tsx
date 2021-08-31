import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Data from "../Routes/Data";
import Header from "./Header";

function RouterComponent(): JSX.Element {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/data" component={Data} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default RouterComponent;
