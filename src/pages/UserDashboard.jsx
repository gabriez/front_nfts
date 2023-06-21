import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import React, { useState, useLayoutEffect } from "react";
import NavBarDashboardUser from "../component/dashboard/NavBarDashboardUser";
import Hamburger from "hamburger-react";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [isOpen, setOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {user.walletAddress
        ? null
        : toast.warning("You need to add a wallet address to buy NFT´s", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            className: "toast-warning",
          })}
      <section className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden lg:flex relative w-auto">
        <div className="lg:hidden absolute top-2 left-4 z-30 ">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={32}
            color="white"
            direction="right"
          />
        </div>
        <div className="flex justify-between w-full ">
          <div
            className={
              isOpen
                ? "bg-slate-500/70 z-[21] absolute left-0 top-0 lg:static transition-all duration-1000 ease-in-out"
                : "bg-slate-500/70 absolute -left-[100%] top-0 z-20 lg:static transition-all duration-700 ease-in-out"
            }
          >
            <NavBarDashboardUser />
          </div>

          <div
            onClick={() => {
              setOpen(!isOpen);
            }}
            className={
              isOpen
                ? "absolute w-screen lg:hidden h-screen z-20 bg-black/50 top-0 left-0 transition-all duration-1000 ease-in-out"
                : "absolute z-20 lg:hidden bg-black/0 transition-all duration-1000 ease-in-out"
            }
          >
            {" "}
          </div>

          <div
            className={
              isOpen
                ? "w-full top-0 left-[320px] absolute lg:static lg:flex-row overflow-auto transition-all duration-1000 ease-in-out"
                : "w-full top-0 left-0 absolute lg:static lg:flex-row overflow-auto transition-all duration-700 ease-in-out"
            }
          >
            <Outlet />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default UserDashboard;
