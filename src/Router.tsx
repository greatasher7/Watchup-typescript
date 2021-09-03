import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Home, Detail } from "./Pages";

function RouterComponent(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city-detail/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default RouterComponent;
