import React, { Component } from "react"
import FormInput from "../form-input/form-input.component"
import "./sign-in.styles.scss"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSignInSubmit = e => {
    e.preventDefault()

    this.setState({ email: "", password: "" })
  }

  handleSignInChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="sign-in">
        <h2>
          I already have an account
        </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSignInSubmit}>
          <FormInput name="email" 
            type="email" 
            value={ this.state.email } 
            required 
            handleChange={this.handleSignInChange }
            label="email"
          />
          
          <FormInput name="password" 
            type="password" 
            value={ this.state.password } 
            required 
            handleChange={this.handleSignInChange }
            label="password"
          />
          

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default SignIn