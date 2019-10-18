import React from 'react'
import {Switch, Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "../src/pages/hats/HatsPage.component";
import "./App.css";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/bones" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
