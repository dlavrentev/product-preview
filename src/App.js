import React from "react";
import "./App.css";
import DesktopComponent from "./Components/DesktopComponent/DesktopComponent";
import MobileComponent from "./Components/MobileComponent/MobileComponent";
import MediaQuery from "react-responsive";

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={791}>
        <DesktopComponent />
      </MediaQuery>
      <MediaQuery maxWidth={790}>
        <MobileComponent />
      </MediaQuery>
    </div>
  );
}

export default App;
