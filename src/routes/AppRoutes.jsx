import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  AboutUs,
  Login,
  Register,
  NotFound,
  Wallet,
  MyProfile,
  Settings,
  UserDashboard,
  IndexDashboard,
  WishList,
} from "./IndexRoutes";
import { AnimatePresence } from "framer-motion";
import CheckoutForm from "../component/CheckoutForm/CheckoutForm";
import { useEffect } from "react";
import { SERVER_URL, useAppContext } from "../Contexts/AppProvider";
import axios from "axios";

const AppRoutes = () => {
  const location = useLocation();
  const { dispatch } = useAppContext();
  const fetchUser = async () => {
    if (localStorage.getItem("userToken")) {
      await axios(`${SERVER_URL}auth`, {
        headers: {
          Authorization: localStorage.getItem("userToken"),
        },
      })
        .then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const fetchNFTS = async () => {
    await axios(`${SERVER_URL}nft`).then((data) => {
      dispatch({ type: "SET_NFTS", value: data.data });
    });
  };

  useEffect(() => {
    fetchUser();
    fetchNFTS();
  }, []);

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<UserDashboard />}>
            <Route path="index" element={<IndexDashboard />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
