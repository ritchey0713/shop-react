import React, { Component } from "react"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component"
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

  handleSignUpSubmit = async (e) => {
    console.log("in submit event")
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if(password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try{
      console.log("in try block")
      // all we care about is the user obj to pass on
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      // pass data to utils func to send to firestore
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: "",
        email: "",     
        password: "",
        confirmPassword: ""
      })
    }catch(err){
      console.log("ERROR CREATING USER", err)
    }
  }

  handleFormInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
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
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={ email }
            onChange={this.handleFormInputChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={ password }
            onChange={this.handleFormInputChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={ confirmPassword }
            onChange={this.handleFormInputChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp