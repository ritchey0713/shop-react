import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_b2T1okYCs7N8suRfyieZ12aX00UFOXSVlF";

  const onToken = (token) => {
    // console.log(token);
    // token would be sent to backend for real payments
    // alert("Payment successful!");
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((resp) => {
        alert("payment success!", resp.data.success);
      })
      .catch((error) => {
        console.log("payment error", error);
        alert("issue with payment :(");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop React"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.img"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
