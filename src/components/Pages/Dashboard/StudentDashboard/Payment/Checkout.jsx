import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../../Context/AuthProvider";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import "../Payment/Checkout.css";

// eslint-disable-next-line react/prop-types
const Checkout = ({ price, classess }) => {
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClienSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [processing, setProcessing] = useState(false);
  const [transctionId, setTranscrtionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      //   console.log(res.data.clientSecret);
      //   console.log(res.data.clientSecret);
      setClienSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transcId = paymentIntent.id;
      setTranscrtionId(transcId);
      const paymentInfo = {
        email: user?.email,
        transctionId: transcId,
        price,
        quantity: classess?.length,
        date: new Date(),
        classId: classess?.map((item) => item._id),
        classItem: classess.map((item) => item.ClassId),

        // eslint-disable-next-line react/prop-types
        className: classess.map((item) => item.className),
      };

      axiosSecure.post("payment", paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.InsertResult.insertedId) {
          Swal.fire("Your Payment is Done, Now You Can Chill....");
        }
      });
    }
  };

  return (
    <div>
      <form className="m-10 w-96" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || processing}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p className="text-red-600 text-lg ml-10">{cardError}</p>}
      {transctionId && (
        <p className="text-green-600 text-lg ml-10">
          {" "}
          Your Transction is Complete TransctionId: {transctionId}
        </p>
      )}
    </div>
  );
};

export default Checkout;
