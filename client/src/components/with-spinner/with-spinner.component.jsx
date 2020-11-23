import React from "react";
import Spinner from "../spinner/spinner.component";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";
// the first thing returned ie: ({ isLoading, ...otherProps }) is from whatever component calls on withSpinner

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
