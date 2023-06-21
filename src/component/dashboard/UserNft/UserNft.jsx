import Eth from "../../../Assets/img/Ethereum.png";
import { motion } from "framer-motion";
import { useAppContext } from "../../../Contexts/AppProvider";

function UserNft(props) {
  const { dispatch } = useAppContext();

  function getIndex(id) {
    const index = props.filterNfts.findIndex((item) => item.id === id);
    dispatch({ type: "INDEX_NFT", value: index });
  }

  function setModal() {
    dispatch({ type: "SET_MODAL_NFT", value: true });
    getIndex(props.id);
  }

  return (
    <motion.div className="flex flex-col w-72 rounded-xl shadow-2xl bg-white">
      <div className="relative flex justify-center">
        <img
          src={props.img}
          alt="nft"
          className="rounded-t-xl mb-5 w-full h-60"
        />
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
          Details
        </motion.button>
      </div>
    </motion.div>
  );
}

export default UserNft;
