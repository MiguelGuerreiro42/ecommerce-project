import React from 'react'
import {Switch, Route} from "react-router-dom";

import {auth} from './firebase/firebase.utils'

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from '../src/components/header/header.component'
import SignInOut from './pages/sign-in-out/sign-in-out.component';

import "./App.css";

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

    console.log(user);
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
      <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signInUp" component={SignInOut}/>
        </Switch>
      </div>
    );
  }
}

export default App;
