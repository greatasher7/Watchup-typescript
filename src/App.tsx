import React from "react";
import GlobalStyles from "./Global/GlobalStyles";
import GlobalFonts from "./Global/GlobalFonts";
import Router from "./Router";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <Router />
    </>
  );
}
export default App;
