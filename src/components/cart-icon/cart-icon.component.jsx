import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ( {toggleCartHidden} ) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">0</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
