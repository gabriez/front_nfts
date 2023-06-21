import bgNft from "../../Assets/img/bg-nft.jpg";
import { useAppContext } from "../../Contexts/AppProvider";
import { FcSettings, FcEditImage } from "react-icons/fc";
import { HiOutlineMail, HiOutlineDocumentReport } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import UserNft from "./UserNft/UserNft";
import CardLoading from "../Card/CardLoading";
import { Suspense } from "react";
import { motion } from "framer-motion";
import ModalNft from "./ModalNft/ModalNft";

const MyProfile = () => {
  const { user, nfts, modalNft, dispatch } = useAppContext();
  const userNfts = nfts.filter((nft) => {
    return nft.userId === user.id;
  });

  function handleModalNft() {
    dispatch({ type: "SET_MODAL_NFT", value: false });
    dispatch({ type: "INDEX_NFT", value: null });
  }

  return (
    <>
      <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
        <div className="container lg:w-full sm:w-full md:w-2/3 bg-white  shadow-lg transform duration-200 easy-in-out">
          <div className=" h-50 overflow-hidden hover:opacity-90">
            <img
              className="w-full h-full hover:scale-125 duration-500"
              src={bgNft}
              alt="NFT"
            />
          </div>
          <div className="flex justify-center px-5 mt-12">
            <img
              className="h-auto w-[50%] lg:w-[25%] rounded-full hover:scale-125 duration-500"
              src={user.img}
              alt="User Picture"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-center px-14 mt-1">
              <h2 className="text-gray-800 text-3xl font-bold">{user.name}</h2>
              <div className="text-left flex items-center">
                <HiOutlineMail size={25} className="mt-2 mx-2" />
                <p className="text-base text-gray-500 mt-2 hover:text-purple-500  cursor-pointer">
                  {user.email}
                </p>
              </div>
              <div className="text-left flex items-center">
                <BiWallet size={25} className="mt-2 mx-2" />
                <p className="text-base text-gray-500 mt-2 hover:text-purple-500  cursor-pointer">
                  Wallet Provided : {user.walletAddress}
                </p>
              </div>
              <div className="text-left flex items-center">
                <HiOutlineDocumentReport size={25} className="mt-2 mx-2" />
                <p className="text-base text-gray-500 mt-2 hover:text-purple-500 cursor-pointer">
                  Balance wallet :
                </p>
              </div>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="flex justify-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <FcEditImage size={25} />
                <span className="text-base font-bold mx-2">Edit</span>
              </div>
              <div className="border" />
              <div className="flex justify-center text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <FcSettings size={25} />
                <NavLink to={"/dashboard/settings"}>
                  <span className="text-base font-bold mx-2">Settings</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {userNfts.length > 0 ? (
          <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 scroll-smooth my-5">
            {userNfts.map((e) => {
              return (
                <Suspense fallback={<CardLoading />} key={e.id}>
                  <motion.div
                    className="md:hover:scale-105 transition-transform"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: -5 }}
                    transition={{ delay: 0.2 }}
                  >
                    <UserNft
                      id={e.id}
                      img={e.img}
                      name={e.name}
                      creator={e.creator}
                      ethPrice={e.ethPrice}
                      filterNfts={userNfts}
                    />
                  </motion.div>
                </Suspense>
              );
            })}
          </div>
        ) : (
          <div className="text-center my-5">
            <h2 className="text-white text-3xl font-bold">
              All NFT you buy will be here, go buy some one!
            </h2>
          </div>
        )}
      </div>
      {modalNft && (
        <ModalNft closeModal={() => handleModalNft()} data={userNfts} />
      )}
    </>
  );
};

export default MyProfile;
