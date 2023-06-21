import React, { useState } from "react";
import { useAppContext } from "../../../Contexts/AppProvider";
import Eth from "../../../Assets/img/Ethereum.png";
import { motion } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";

function ModalNft(props) {
  const { indexNft } = useAppContext();
  const [truncate, setTruncate] = useState({
    truncateToken: false,
    truncateP: false,
  });

  const truncateClick = (changer) => {
    return changer === "yes"
      ? setTruncate({
          truncateToken: !truncate.truncateToken,
          truncateP: truncate.P,
        })
      : setTruncate({ ...truncate, truncateP: !truncate.truncateP });
  };

  return (
    <motion.div
      className="inset-0 fixed grid place-content-center bg-[rgba(0,0,0,0.6)]"
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
          className={`bg-cover bg-center bg-no-repeat rounded-lg md:mt-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          style={{ backgroundImage: `url('${props.data[indexNft].img}')` }}
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

              {/*CARDS MOBILE */}
              <div className="md:hidden mx-4 mt-5 grid grid-cols-2 grid-flow-col ">
                <span>
                  <h1 className="text-2xl font-bold">
                    {props.data[indexNft].name}
                  </h1>
                  <h3 className="text-gray-500 text-sm">
                    {props.data[indexNft].creator}
                  </h3>
                </span>
                <span className="ml-20 mt-4 mr-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <img src={Eth} alt="" className="w-14" />
                      <p
                        style={{ fontSize: "clamp(0.05rem, 4.5vw, 3rem )" }}
                        className=" font-semibold"
                      >
                        {props.data[indexNft].ethPrice}
                      </p>
                    </div>
                    <p className="text-gray-500 mt-1 text-base sm:text-xl  text-center">
                      ${props.data[indexNft].usdPrice}
                    </p>
                  </div>
                </span>
              </div>

              <div className="md:hidden mx-4">
                <div>
                  <h2 className="font-semibold text-lg">Contact Address</h2>
                  <a
                    href="#"
                    className="text-blue-500 text-xs decoration-solid underline"
                  >
                    {props.data[indexNft].contactAddress}
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
                    {props.data[indexNft].tokenId}
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
                    {props.data[indexNft].description}
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
              </div>
              {/*CARDS DESKTOP */}
              <div className="hidden md:flex md:flex-col">
                <span className="mx-4 mb-7 mt-2">
                  <h1 className="text-4xl font-bold">
                    {props.data[indexNft].name}
                  </h1>
                  <h3 className="text-gray-500 text-base">
                    {props.data[indexNft].creator}
                  </h3>
                </span>

                <div className="mx-4 hidden md:block">
                  <div>
                    <h2 className="font-semibold text-lg">Contact Address</h2>
                    <a
                      href="#"
                      className="text-blue-500 text-sm decoration-solid underline"
                    >
                      {props.data[indexNft].contactAddress}
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
                      {props.data[indexNft].tokenId}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block my-2 text-justify box-border">
                <h2 className="text-lg text-left font-bold">Description</h2>
                <p className="text-sm overflow-hidden ">
                  {props.data[indexNft].description}
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
                      {props.data[indexNft].ethereumPrice}
                    </p>
                  </div>
                  <p className="text-gray-500 mt-1 text-lg text-center ">
                    {props.data[indexNft].usdPrice}
                  </p>
                </div>

                <div className="hidden md:flex justify-center">
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ModalNft;
