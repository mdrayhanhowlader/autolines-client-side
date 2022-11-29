import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);

  return (
    <div>
      <h2 className="text-center text-3xl my-4 text-primary">
        Make Your Payment
      </h2>
      <h3 className="text-2xl text-center">
        Please Pay <strong>${booking.price}</strong> For Purchase {booking.item}
      </h3>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
