import React, { Component } from "react"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import { StyledButtonsWrapper, StyledSignUp } from "./sign-in.styles"
import "./sign-in.styles.scss"


class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSignInSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })

    } catch(e) {
      console.log("ERROR SIGNING IN", e.message)
    }

  }

  handleSignInChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render(){
    return(
      <StyledSignUp>
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
          
          <StyledButtonsWrapper>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
          </StyledButtonsWrapper>

        </form>
      </StyledSignUp>
    )
  }
}

export default SignIn