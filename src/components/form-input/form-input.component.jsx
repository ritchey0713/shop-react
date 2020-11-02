import React from "react"
import "./form-input.styles.scss"
import { StyledFormInput, StyledGroup, StyledLabel } from "./form-input.styles"

//otherProps.value.length checks if user has started typing into form field

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <StyledGroup>
    <StyledFormInput onChange={ handleChange } { ...otherProps }/>
    {
      label ? 
      <StyledLabel className={otherProps.value.length ? "shrink" : ""}>
        { label }
      </StyledLabel>
      : 
      null
    }
  </StyledGroup>
)

export default FormInput