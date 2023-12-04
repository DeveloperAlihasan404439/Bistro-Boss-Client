import Title from "../../../Sheard/Title/Title";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KP);
const Payment = () => {
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
          /*...*/
        },
      };
  return (
    <>
      <Title title="BOOK A TABLE" single="Reservation" />
      <div className="w-11/12 mx-auto">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
