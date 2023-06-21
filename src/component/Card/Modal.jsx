import React, { useState } from "react";
import { useAppContext } from "../../Contexts/AppProvider";
import { Link } from "react-router-dom";
import Eth from "../../Assets/img/Ethereum.png";
import LikeBtn from "./LikeBtn";
import { motion } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";

function Modal(props) {
  const { indexCard, dispatch } = useAppContext();
  const [truncate, setTruncate] = useState({
    truncateToken: false,
    truncateP: false,
  });
  function handleCheckout() {
    dispatch({ type: "SET_SHOW_CHECKOUT", value: true });
    dispatch({ type: "SET_MODAL", value: false });
  }

  // const navbarShow = () => {
  //   dispatch({ type: "SET_SHOW_NAV", value: false });
  // };

  const truncateClick = (changer) => {
    return changer === "yes"
      ? setTruncate({
          truncateToken: !truncate.truncateToken,
          truncateP: truncate.P,
        })
      : setTruncate({ ...truncate, truncateP: !truncate.truncateP });
  };

  const likeButtonModal = () => {
    document.getElementById(props.data[indexCard].id).click();
  };

  return (
    <motion.div
      className="inset-0 fixed grid place-content-center bg-[rgba(0,0,0,0.6)] overflow-y-auto py-3 pt-7 md:pt-0 md:py-3 md:py-auto z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ scale: 0, transition: { delay: 0.3 } }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.4 } }}
      >
        <motion.div
          className={`bg-cover bg-center bg-no-repeat rounded-lg md:mt-16 mt-24 `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          style={{ backgroundImage: `url('${props.data[indexCard].img}')` }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <button
              className="scale-150 ml-6 mt-4 bg-white rounded-full p-1 outline outline-1 outline-gray-300 shadow-2xl active:scale-95 transition-all"
              onClick={props.closeModal}
            >
              <TiArrowBack className="text-lg" />
            </button>
          </motion.div>

          <div className="grid place-content-center">
            <motion.div
              className="border-box relative flex flex-col w-[95vw] opacity-90 rounded-xl shadow-2xl bg-white mt-[15rem] md:flex md:flex-row md:w-[95vw]"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 1.5 },
              }}
            >
              <div className="absolute -top-7 md:right-[48px] sm:right-[16.5%] right-[12%]  bg-black rounded-full">
                <LikeBtn
                  onClick={likeButtonModal}
                  id={props.data[indexCard].id + ".1"}
                />
              </div>

              {/*CARDS MOBILE */}
              <div className="md:hidden mx-4 mt-5 grid grid-cols-2 grid-flow-col ">
                <span>
                  <h1 className="text-2xl font-bold">
                    {props.data[indexCard].name}
                  </h1>
                  <h3 className="text-gray-500 text-sm">
                    {props.data[indexCard].creator}
                  </h3>
                </span>

                <div className="flex flex-col items-center justify-center ml-20 mt-4 mr-5">
                  <div className="flex items-center justify-center">
                    <img src={Eth} alt="" className="w-14" />
                    <p
                      style={{ fontSize: "clamp(24px, 4.5vw, 3rem )" }}
                      className=" font-semibold"
                    >
                      {props.data[indexCard].ethPrice}
                    </p>
                  </div>
                  <p className="text-gray-500 ml-5 text-base sm:text-xl  text-center">
                    ${props.data[indexCard].usdPrice}
                  </p>
                </div>
              </div>

              <div className="md:hidden mx-4">
                <div>
                  <h2 className="font-semibold text-lg">Contact Address</h2>
                  <a
                    href="#"
                    className="text-blue-500 text-xs decoration-solid underline"
                  >
                    {props.data[indexCard].contactAddress}
                  </a>
                </div>

                <div className="md:hidden mt-2">
                  <h2 className="font-semibold text-lg">Token ID</h2>
                  <button
                    onClick={() => truncateClick("yes")}
                    className={
                      truncate.truncateToken
                        ? "rounded-full outline outline-1 outline-gray-300 px-1 text-sm shadow-xl"
                        : "rounded-full outline outline-1 outline-gray-300 px-1 w-40 text-sm shadow-xl truncate"
                    }
                  >
                    {props.data[indexCard].tokenId}
                  </button>
                </div>

                <div className="md:hidden my-2 text-center box-border">
                  <p
                    className={
                      truncate.truncateP
                        ? "text-lg "
                        : "text-lg h-[40px] overflow-hidden "
                    }
                  >
                    {props.data[indexCard].description}
                  </p>
                  <button
                    className="bg-[#FFF]/0 text-blue-500 text-xs decoration-solid underline inline md:hidden"
                    onClick={() => truncateClick("no")}
                  >
                    {truncate.truncateP ? "Mostrar menos..." : "Mostrar más..."}
                  </button>
                </div>
              </div>
              <div className="md:hidden flex justify-center mb-2">
                <button
                  onClick={handleCheckout}
                  className="active:scale-75 transition-all active:bg-[#002b3f] bg-[#001f2d] text-white font-semibold text-sm rounded-2xl shadow-lg py-2.5 w-[7rem]"
                >
                  Checkout
                </button>
              </div>
              {/*CARDS DESKTOP */}
              <div className="hidden md:flex md:flex-col">
                <span className="mx-4 mb-7 mt-2">
                  <h1 className="text-4xl font-bold">
                    {props.data[indexCard].name}
                  </h1>
                  <h3 className="text-gray-500 text-base">
                    {props.data[indexCard].creator}
                  </h3>
                </span>

                <div className="mx-4 hidden md:block">
                  <div>
                    <h2 className="font-semibold text-lg">Contact Address</h2>
                    <a
                      href="#"
                      className="text-blue-500 text-sm decoration-solid underline"
                    >
                      {props.data[indexCard].contactAddress}
                    </a>
                  </div>

                  <div className="mt-2 mb-6">
                    <h2 className="font-semibold text-lg">Token ID</h2>
                    <button
                      onClick={() => truncateClick("yes")}
                      className={
                        truncate.truncateToken
                          ? "rounded-full outline outline-1 outline-gray-300 px-1  text-sm shadow-xl"
                          : "rounded-full outline outline-1 outline-gray-300 px-1 w-40 text-sm shadow-xl truncate"
                      }
                    >
                      {props.data[indexCard].tokenId}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block my-2 text-justify box-border">
                <h2 className="text-lg text-left font-bold">Description</h2>
                <p className="text-sm overflow-hidden ">
                  {props.data[indexCard].description}
                </p>
              </div>
              <div className="hidden md:flex flex-col justify-evenly items-center ml-2.5 m-6">
                <div className="flex flex-col ">
                  <div className="flex items-center box-border justify-center ">
                    <img src={Eth} alt="" className="w-14" />
                    <p
                      style={{ fontSize: "clamp(1.2rem, 1.5vw, 3rem )" }}
                      className="text-lg font-semibold"
                    >
                      {props.data[indexCard].ethereumPrice}
                    </p>
                  </div>
                  <p className="text-gray-500 mt-1 text-lg text-center ">
                    {props.data[indexCard].usdPrice}
                  </p>
                </div>

                <div className="hidden md:flex justify-center ">
                  <button
                    onClick={handleCheckout}
                    className="active:scale-75 transition-all active:bg-[#002b3f] bg-[#001f2d] text-white font-semibold text-sm rounded-2xl shadow-lg py-2.5 w-[7rem] "
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
