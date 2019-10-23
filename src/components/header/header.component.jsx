import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "./../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        COMPRA
      </Link>
      <Link to="/" className="option">
        SOBRE
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signInUp">SIGN IN</Link>
      )}

      <CartIcon className="option" />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStatetoProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStatetoProps)(Header);
