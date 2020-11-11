import React from "react"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"
import { SignUpAndSignInWrapper } from "./sign-in-and-sign-up.styles"
import "./sign-in-and-sign-up.styles.scss"

const SignInAndSignUpPage = () => (
  <SignUpAndSignInWrapper>
    <SignIn />
    <SignUp />
  </SignUpAndSignInWrapper>
)

export default SignInAndSignUpPage