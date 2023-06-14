import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../../../../hooks/useClass";

//TODO: Publish Key
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pub_key);
const Payment = () => {
  const [classess] = useClass();
  const total = classess.reduce((add, item) => item.price + add, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h1> All Payment Here : </h1>
      <Elements stripe={stripePromise}>
        <Checkout classess={classess} price={price}></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;
