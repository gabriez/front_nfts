import React from "react";
import { Link } from "react-router-dom";
import Eth from "../../Assets/img/Ethereum.png";
import { motion } from "framer-motion";
import { useAppContext } from "../../Contexts/AppProvider";
import { TiArrowBack, TiInputChecked } from "react-icons/ti";

function Checkout(props) {
  const { dispatch, indexCard } = useAppContext();

  const handleCheckout = () => {
    dispatch({ type: "SET_SHOW_CHECKOUT", value: false });
  };

  return (
    <motion.div
      className="inset-0 fixed grid place-content-center bg-[rgba(0,0,0,0.6)] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ scale: 0, transition: { delay: 0.3 } }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.4 } }}
      >
        <div className={`bg-cover bg-center bg-no-repeat rounded-lg md:mt-16`}>
          <div className="grid place-content-center ">
            <div className="border-box relative flex flex-col w-[95vw] opacity-90 rounded-xl shadow-2xl bg-white md:w-[85vw] ">
              {/*CHECKOUT MOBILE */}
              <div className="mx-4 mt-5 grid grid-col grid-flow-col ">
                <div className="">
                  <button
                    onClick={props.closeModal}
                    className="scale-150 bg-white rounded-full p-1 outline outline-1 outline-gray-300 shadow-2xl active:scale-95 transition-all"
                  >
                    <TiArrowBack className="text-lg" />
                  </button>
                </div>
                <h2 className=" text-2xl font-bold text-left ">
                  Complete Checkout
                </h2>
              </div>
              <div className="mx-4 mt-5 grid grid-cols-2 grid-flow-col border-y-2 border-black-400 ">
                <h3 className="text-lg font-bold text-left ">Item</h3>
                <h3 className="text-lg font-bold text-center ">Subtotal</h3>
              </div>

              <div className="mx-4 mt-5 grid grid-cols-2 grid-flow-col">
                <div className="flex items-center">
                  <img
                    src={props.data[indexCard].img}
                    className="w-10 h-10 rounded-full mr-4"
                    alt={props.data[indexCard].name}
                  />
                  <span>
                    <p className=" text-xl font-bold">
                      {props.data[indexCard].name}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {props.data[indexCard].creator}
                    </p>
                  </span>
                </div>

                <div className="ml-2 mt-4 mr-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <img src={Eth} alt="" className="w-8" />
                      <p
                        style={{ fontSize: "clamp(0.03rem, 4.5vw, 1.3rem )" }}
                        className=" font-semibold "
                      >
                        {props.data[indexCard].ethereumPrice}
                      </p>
                    </div>
                    <p className="text-gray-500 mt-1 text-base sm:text-xl  text-center">
                      (${props.data[indexCard].usdPrice})
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-4 mt-5 grid grid-cols-2 grid-flow-col border-y-2 border-black-400 ">
                <h2 className="text-lg font-bold text-left self-center">
                  Total
                </h2>
                <div className="ml-2 mt-4 mr-5 flex flex-col">
                  <div className="flex items-center justify-center ">
                    <img src={Eth} alt="" className="w-14" />
                    <p
                      style={{ fontSize: "clamp(0.05rem, 4.5vw, 1.6rem )" }}
                      className=" font-semibold text-[#32b2fd]"
                    >
                      {props.data[indexCard].ethereumPrice}
                    </p>
                  </div>
                  <p className="text-gray-500 mt-1 text-base sm:text-xl  text-center">
                    (${props.data[indexCard].usdPrice})
                  </p>
                </div>
              </div>

              <div className="flex items-center mx-8 mt-5 mb-4">
                <input
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label
                  htmlFor="terms-and-privacy"
                  className=" block text-sm text-gray-500 text-center ml-4"
                >
                  By checking this box, I agree to NTF Marketplace
                  <a
                    href="#"
                    className=" ml-1 text-blue-600 hover:text-blue-500"
                  >
                    Terms of service
                  </a>
                </label>
              </div>

              <div className="flex justify-center mb-4">
                <Link to="/checkout">
                  <button
                    className="active:scale-75 transition-all active:bg-[#002b3f] bg-[#001f2d] text-white font-semibold text-sm rounded-2xl shadow-lg py-3 w-[10rem]"
                    onClick={handleCheckout}
                  >
                    Go to checkout page
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Checkout;
