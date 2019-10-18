import React from 'react'
import {Switch, Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from '../src/components/header/header.component'
import SignInOut from './pages/sign-in-out/sign-in-out.component';

import "./App.css";


function App() {
  return (
    <div>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signInUp" component={SignInOut}/>
      </Switch>
    </div>
  );
}

export default App;
