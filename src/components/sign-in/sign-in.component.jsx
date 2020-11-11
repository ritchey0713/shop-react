// import React, { Component } from "react";
import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { StyledButtonsWrapper, StyledSignUp } from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";
import { connect } from "react-redux";

// pre hooks
// class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleSignInSubmit = (e) => {
//     e.preventDefault();
//     const { emailSignInStart } = this.props;
//     const { email, password } = this.state;
//     emailSignInStart({ email, password });

//     //PRE SAGA CODE
//     // try {
//     //   await auth.signInWithEmailAndPassword(email, password);
//     //   this.setState({ email: "", password: "" });
//     // } catch (e) {
//     //   console.log("ERROR SIGNING IN", e.message);
//     // }
//   };

//   handleSignInChange = (e) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { googleSignInStart } = this.props;
//     return (
//       <StyledSignUp>
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSignInSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             value={this.state.email}
//             required
//             handleChange={this.handleSignInChange}
//             label="email"
//           />

//           <FormInput
//             name="password"
//             type="password"
//             value={this.state.password}
//             required
//             handleChange={this.handleSignInChange}
//             label="password"
//           />

//           <StyledButtonsWrapper>
//             <CustomButton type="submit">Sign In</CustomButton>
//             <CustomButton
//               type="button"
//               onClick={googleSignInStart}
//               isGoogleSignIn
//             >
//               Sign In with google
//             </CustomButton>
//           </StyledButtonsWrapper>
//         </form>
//       </StyledSignUp>
//     );
//   }
// }

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    emailSignInStart({ email, password });

    //PRE SAGA CODE
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (e) {
    //   console.log("ERROR SIGNING IN", e.message);
    // }
  };

  const handleSignInChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledSignUp>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignInSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleSignInChange}
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleSignInChange}
          label="password"
        />

        <StyledButtonsWrapper>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with google
          </CustomButton>
        </StyledButtonsWrapper>
      </form>
    </StyledSignUp>
  );
};
export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
