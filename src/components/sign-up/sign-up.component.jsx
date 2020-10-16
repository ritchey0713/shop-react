import React, { Component } from "react"
import FormInput from "../form-input/form-input.component"
import "./sign-up.styles.scss"

class SignUp extends Component {
  constructor(){
    super()

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSignUpSubmit = () => {

  }

  handleFormInputChange = () => {
    
  }

  render(){
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with yiour email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSignUpSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={ displayName }
            onChange={this.handleFormInputChange}
          />

          
        </form>
      </div>
    )
  }
}