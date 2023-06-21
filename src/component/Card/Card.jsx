import Eth from "../../Assets/img/Ethereum.png";
import LikeBtn from "./LikeBtn";
import { motion } from "framer-motion";
import { useAppContext } from "../../Contexts/AppProvider";
import { SERVER_URL } from "../../Contexts/AppProvider";
import axios from "axios";
import { forwardRef } from "react";

const Card = forwardRef((props, ref) => {
  const { dispatch, nfts } = useAppContext();

  function getIndex(id) {
    const index = nfts.findIndex((item) => item.id === id);
    dispatch({ type: "INDEX_CARD", value: index });
  }

  function setModal() {
    dispatch({ type: "SET_MODAL", value: true });
    getIndex(props.id);
  }

  async function handleLike() {
    const nftId = props.id;
    await axios
      .post(
        `${SERVER_URL}users/fav`,
        { nftId: nftId },
        {
          headers: {
            Authorization: localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <motion.div className="flex flex-col w-72 rounded-xl shadow-2xl bg-white">
      <div className="relative flex justify-center">
        <img
          src={props.img}
          alt="nft"
          className="rounded-t-xl mb-5 w-full h-60"
        />
        <button className="absolute top-1 right-1" onClick={() => handleLike()}>
          <LikeBtn id={props.id} active={true} ref={ref} />
        </button>
      </div>
      <div className="ml-4">
        <h1 className="text-2xl FontMedium leading-tight">{props.name}</h1>
        <h3 className="text-gray-500 text-sm FontMedium">{props.creator}</h3>
      </div>
      <div className="grid grid-flow-col grid-cols-2 my-5">
        <div className="flex items-center ml-2">
          <img src={Eth} alt="" className="w-7" />
          <p className="text-2xl FontBold">{props.ethPrice}</p>
        </div>

        <motion.button
          className="active:scale-75 transition-all active:bg-[#002b3f] bg-[#001f2d] text-white FontBold text-sm rounded-2xl shadow-lg py-2.5 w-[7rem] ml-6"
          onClick={() => {
            setModal();
          }}
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
});

export default Card;
