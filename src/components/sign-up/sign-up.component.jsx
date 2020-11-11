//import React, { Component } from "react";
import React, { useState } from "react";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { emailSignUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { StyledSignUp } from "./sign-up.styles";
import "./sign-up.styles.scss";

//pre hooks
// class SignUp extends Component {
//   constructor() {
//     super();

//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }

//   handleSignUpSubmit = (e) => {
//     e.preventDefault();
//     const { emailSignUpStart } = this.props;
//     const { displayName, email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       alert("passwords do not match");
//       return;
//     }

//     emailSignUpStart(this.state);
//     //pre saga code
//     // try{
//     //   console.log("in try block")
//     //   // all we care about is the user obj to pass on
//     //   const { user } = await auth.createUserWithEmailAndPassword(email, password)
//     //   // pass data to utils func to send to firestore
//     //   await createUserProfileDocument(user, { displayName })
//     //   this.setState({
//     //     displayName: "",
//     //     email: "",
//     //     password: "",
//     //     confirmPassword: ""
//     //   })
//     // }catch(err){
//     //   console.log("ERROR CREATING USER", err.message)
//     // }
//   };

//   handleFormInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <StyledSignUp>
//         <h2 className="title">I do not have an account</h2>
//         <span>Sign up with yiour email and password</span>
//         <form className="sign-up-form" onSubmit={this.handleSignUpSubmit}>
//           <FormInput
//             type="text"
//             name="displayName"
//             value={displayName}
//             onChange={this.handleFormInputChange}
//             label="Display Name"
//             required
//           />

//           <FormInput
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleFormInputChange}
//             label="Email"
//             required
//           />

//           <FormInput
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleFormInputChange}
//             label="Password"
//             required
//           />

//           <FormInput
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={this.handleFormInputChange}
//             label="Confirm Password"
//             required
//           />
//           <CustomButton type="submit">Sign Up</CustomButton>
//         </form>
//       </StyledSignUp>
//     );
//   }
// }

const SignUp = ({ emailSignUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    emailSignUpStart(userCredentials);
    //pre saga code
    // try{
    //   console.log("in try block")
    //   // all we care about is the user obj to pass on
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password)
    //   // pass data to utils func to send to firestore
    //   await createUserProfileDocument(user, { displayName })
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   })
    // }catch(err){
    //   console.log("ERROR CREATING USER", err.message)
    // }
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <StyledSignUp>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with yiour email and password</span>
      <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleFormInputChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleFormInputChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleFormInputChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleFormInputChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </StyledSignUp>
  );
};

export default connect(null, { emailSignUpStart })(SignUp);
