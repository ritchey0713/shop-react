import React, { Component } from "react"
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
          <input name="email" 
            type="email" 
            value={ this.state.email } 
            required 
            onChange={this.handleSignInChange }

          />
          <label>EMAIL</label>
          <input name="password" 
            type="password" 
            value={ this.state.password } 
            required 
            onChange={this.handleSignInChange }

          />
          <label>PASSWORD</label>

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default SignIn