import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from './redux/user/user.actions'

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import SignInOut from "./pages/sign-in-out/sign-in-out.component";

import "./App.css";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signInUp" render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInOut/>} />
        </Switch>
      </div>
    );
  }
}

/**
 * Recupera um valor da Store do Redux e o transforma em parâmetro utilizavél pelo componente
 * @param {Objetct} {user} 
 */
const mapStateToProps = ({user}) => ({
  currentUser: user
})

/**
 * Transforma a action criada no Redux em uma prop. Utilizavél para adicionar o estado no reducer
 * @param {Objetct} {user} 
 */
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
