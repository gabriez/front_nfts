import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { SERVER_URL } from "../../Contexts/AppProvider";
import { useAppContext } from "../../Contexts/AppProvider";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutForm() {
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { indexCard, nfts } = useAppContext();

  const handleCheckout = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      await axios
        .post(
          `${SERVER_URL}checkout`,
          { id, amount: 10000, nftId: nfts[indexCard].id },
          {
            headers: {
              Authorization: localStorage.getItem("userToken"),
            },
          }
        )
        .then(() => {
          toast.success("Thanks for your purchase", {
            className: "success",
            draggable: false,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            onClose: () => {
              navigate("/");
              window.location.reload();
            },
          });
        })

        .catch((err) => {
          toast.error("There was an error doing the payment", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000
          });
          console.log(err);
        });
      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed grid place-content-center bg-[rgba(0,0,0,0.6)] inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ scale: 0, transition: { delay: 0.3 } }}
    >
      <motion.form
        onSubmit={handleCheckout}
        className="shadow-md rounded-lg w-[95vw] h-[50vh] bg-white relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.4 } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          className="absolute right-0 mr-4 top-3 "
        >
          <Link to={"/"}>
            <button
              className="bg-white rounded-full p-1 shadow-2xl active:scale-[.90] transition-all active:bg-red-600 
                         active:text-white hover:bg-red-600 hover:text-white"
              disabled={!stripe}
            >
              <AiOutlineCloseCircle size={30} className="text-lg" />
            </button>
          </Link>
        </motion.div>
        <div className="pt-4 flex flex-col gap-10 ">
          <h3 className="text-black text-2xl font-semibold text-center">
            Checkout
          </h3>
          <CardElement />

          {loading ? (
            <button
              className="flex place-content-center items-center gap-2 bg-blue-500 text-white text-base font-bold py-2 px-4 rounded transition-all"
              disabled
            >
              <CgSpinner className="animate-spin w-5 h-5" /> Processing
            </button>
          ) : (
            <button
              className="flex place-content-center gap-2 bg-blue-700 hover:bg-blue-500 text-white text-base font-bold py-2 px-4 rounded transition-all"
              onClick={handleCheckout}
            >
              Pay
            </button>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
}

export default CheckoutForm;
