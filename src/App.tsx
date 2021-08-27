import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader";
import GlobalStyle from "./Styles/global-style";
import RouterComponent from "./Components/Router";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RouterComponent />
      </Router>
    </>
  );
}

export default hot(module)(App);
