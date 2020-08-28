import React from "react";
import { NavigationBar } from "./component/NavigationBar";
import { Header } from "./component/Header";
import { Overview } from "./component/Overview";
import { Proof } from "./component/Proof";

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Header />
      <Overview />
      <Proof />
    </React.Fragment>
  );
};

export default App;
