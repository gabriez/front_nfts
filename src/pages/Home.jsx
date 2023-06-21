import React, { useEffect, Suspense, lazy, useState } from "react";
const Card = lazy(() => import("../component/Card/Card"));
import CardLoading from "../component/Card/CardLoading";
import NavBar from "../component/NavBar";
import Modal from "../component/Card/Modal.jsx";
import { motion } from "framer-motion";
import { useAppContext } from "../Contexts/AppProvider";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import { Checkout, Footer } from "../routes/IndexRoutes";
import axios from "axios";
import { SERVER_URL } from "../Contexts/AppProvider";

function Home() {
  const { modal, dispatch, showLogin, showRegister, showCheckout, nfts } =
    useAppContext();
  const refs = React.useRef([]);
  const [favorites, setFavorites] = useState([]);
  let availableNfts = nfts.filter((nft) => {
    return nft.status === "available";
  });
  let userFavorites;

  function handleModal() {
    dispatch({ type: "SET_MODAL", value: false });
    dispatch({ type: "INDEX_CARD", value: null });
  }
  function handleLogin() {
    dispatch({ type: "SET_SHOW_LOGIN", value: false });
  }
  function handleRegister() {
    dispatch({ type: "SET_SHOW_REGISTER", value: false });
  }
  function handleCheckout() {
    dispatch({ type: "SET_SHOW_CHECKOUT", value: false });
  }
  const handleAvatarActive = () => {
    dispatch({ type: "SHOW_AVATAR", value: false });
  };

  useEffect(() => {
    let principalPosition = window.scrollY;
    const navScroll = () => {
      let actualPosition = window.scrollY;
      if (principalPosition >= actualPosition) {
        dispatch({ type: "SET_SHOW_NAV", value: false });
      } else {
        dispatch({ type: "SET_SHOW_NAV", value: true });
      }
      principalPosition = actualPosition;
    };

    window.addEventListener("scroll", navScroll);

    const fetchFavorites = async () => {
      await axios
        .get(`${SERVER_URL}users/fav`, {
          headers: {
            Authorization: localStorage.getItem("userToken"),
          },
        })
        .then((data) => {
          setFavorites(data.data[0].favorites),
            (userFavorites = favorites.filter((nft) => {
              return nft.favorite.isFavorite === true;
            }));

          availableNfts.map((nft, index) => {
            userFavorites.map((favorite) => {
              if (favorite.id === nft.id) {
                refs.current[index].checked = true;
              }
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFavorites();

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <motion.div
        className={
          nfts.length <= 3
            ? "h-screen overflow-y-auto"
            : "grid place-items-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 scroll-smooth my-5"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleAvatarActive}
      >
        {availableNfts.map((e, index) => {
          return (
            <Suspense fallback={<CardLoading />} key={e.id}>
              <motion.div
                className="md:hover:scale-105 transition-transform"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -5 }}
                transition={{ delay: 0.2 }}
              >
                <Card
                  id={e.id}
                  img={e.img}
                  name={e.name}
                  creator={e.creator}
                  ethPrice={e.ethPrice}
                  ref={(e) => {
                    refs.current[index] = e;
                  }}
                />
              </motion.div>
            </Suspense>
          );
        })}
        {modal && <Modal closeModal={() => handleModal()} data={nfts} />}
        {showLogin && <Login closeModal={() => handleLogin()} />}
        {showRegister && <Register closeModal={() => handleRegister()} />}
        {showCheckout && (
          <Checkout closeModal={() => handleCheckout()} data={nfts} />
        )}
      </motion.div>
      <div
        className={nfts.length <= 3 ? "sticky bottom-0 w-full" : "block w-full"}
        onClick={handleAvatarActive}
      >
        <Footer />
      </div>
    </>
  );
}

export default Home;
