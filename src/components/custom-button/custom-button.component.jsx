import React from "react"
import "./custom-button.styles.scss"

//children prop allows you to grab w/e is in between opening and closing tags
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;