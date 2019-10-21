import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children , handleSubmit, isGoogleSignIn, ...otherProps }) => (
  <button className={` ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onSubmit={handleSubmit} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
