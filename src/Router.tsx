import React from "react";
import { Route, Redirect, Switch, RouteComponentProps } from "react-router-dom";
import { Home, Detail } from "./Pages";

function RouterComponent(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/city-detail/:id"
          render={(props) => <Detail {...props} key={props.match.params.id} />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default RouterComponent;
