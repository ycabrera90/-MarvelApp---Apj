import "./App.css";
import React, { Suspense } from "react";

// for dev env.
// import MainHeader from "./components/MainHeader/MainHeader";
// import InfoBar from "./components/InfoBar/InfoBar";
// import HomePage from "./pages/HomePage";

// deploy on Server
const MainHeader = React.lazy(() =>
  import("./components/MainHeader/MainHeader")
);
const InfoBar = React.lazy(() => import("./components/InfoBar/InfoBar"));
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <MainHeader />
      <InfoBar />
      <HomePage />
    </Suspense>
  );
}

export default App;
