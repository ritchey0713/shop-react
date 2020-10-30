import React from "react";
import "./custom-button.styles.scss";
import { CustomButtonStyles } from "./custom-button.styles";

//children prop allows you to grab w/e is in between opening and closing tags
const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonStyles {...otherProps}>{children}</CustomButtonStyles>
);

export default CustomButton;
