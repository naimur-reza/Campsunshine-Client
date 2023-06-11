import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import "./CheckoutStyle.css";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
const CheckoutForm = ({ closeModal, classInfo }) => {
  const [cardError, setCardError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
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
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          ...classInfo,
          paymentIntentId: paymentIntent.id,
        };
        closeModal();
        toast.success(
          <p className="text-sm">
            Payment Successful. Id:
            <span className="bg-teal-500 text-xs mx-3 text-white p-1 rounded-full">
              {paymentIntent.id}
            </span>
            🤑
          </p>
        );
      }
    }
  };
  useEffect(() => {
    // todo : useAxios secure
    if (classInfo.price) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          price: classInfo.price,
        })

        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [classInfo]);
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <div className="mt-4">
          <button
            disabled={!stripe}
            type="submit
          "
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            // onClick={closeModal}>
          >
            Got it, thanks!
          </button>
        </div>
      </form>

      {cardError && (
        <p className="text-sm py-3 mr-2 text-red-600">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
