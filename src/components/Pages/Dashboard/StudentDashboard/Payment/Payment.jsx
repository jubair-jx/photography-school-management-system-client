import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import useClass from "../../../../../hooks/useClass";
import Checkout from "./Checkout";

//TODO: Publish Key
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pub_key);
const Payment = () => {
  const [classess] = useClass();
  const total = classess.reduce((add, item) => item.price + add, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className=" h-full mx-auto my-16">
      <h1 className=" text-center text-2xl font-semibold">Payment Here : </h1>
      <div className=" flex items-center justify-center">
        <Elements stripe={stripePromise}>
          <Checkout classess={classess} price={price}></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
