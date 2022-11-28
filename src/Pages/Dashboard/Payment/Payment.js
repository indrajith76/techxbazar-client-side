import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const order = useLoaderData();
  const { productName, sellerEmail, sellerMobileNumber, buyerEmail, price } =
    order;
  return (
    <>
      <div className="my-5 ml-5">
        <h2 className="text-3xl text-accent">
          Payment for{" "}
          <span className="text-lg font-semibold">{productName}</span>
        </h2>
        <p className="text-xl my-5 text-accent">
          Please pay <strong>${price}</strong>
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
