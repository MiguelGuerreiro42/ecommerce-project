import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children , handleSubmit, ...otherProps }) => (
  <button className="custom-button" onSubmit={handleSubmit} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
