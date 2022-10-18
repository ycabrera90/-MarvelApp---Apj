import React, { useEffect } from "react";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import InfoBar from "./components/InfoBar/InfoBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <MainHeader />
      <InfoBar />

      <Route path="/" exact>
        <Redirect to="/series" />
      </Route>

      <Route path="/series" exact>
        <HomePage />
      </Route>
    </>
  );
}

export default App;
