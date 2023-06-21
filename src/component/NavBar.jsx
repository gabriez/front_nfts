import React from "react";
import Logo from "../Assets/favicon.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import AvatarDropDown from "./Avatar/AvatarDropDown";
import { useAppContext } from "../Contexts/AppProvider";

const NavBar = () => {
  const { showNav, dispatch, modal } = useAppContext();
  const handleAvatarActive = () => {
    dispatch({ type: "SHOW_AVATAR", value: false });
  };

  return (
    <div
      className={
        !showNav && !modal
          ? "pb-2 pt-2.5 sticky top-[0%] w-full flex flex-col md:flex-row justify-between md:items-center px-4 bg-[#001f2d] text-gray-300 z-20 transition-all duration-700 ease-in-out"
          : "pb-2 pt-2.5 sticky -top-[140px] w-full flex flex-col smaller:-top-[120px]  md:flex-row justify-between md:items-center px-4 bg-[#001f2d] text-gray-300 z-20 transition-all duration-700 ease-in-out"
      }
    >
      <div className="flex justify-between items-center w-full md:pb-0 pb-2 px-2">
        <div className="flex items-center" onClick={handleAvatarActive}>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "50px" }}
              className="cursor-pointer"
            />
          </NavLink>
          <p
            className="mx-2.5 text-center"
            style={{ fontSize: "clamp(1rem, 1.6vw, 4rem)" }}
          >
            NFT MARKETPLACE
          </p>
        </div>

        <div className="hidden md:block" onClick={handleAvatarActive}>
          <SearchBar />
        </div>

        <div className="">
          <AvatarDropDown />
        </div>
      </div>

      <div
        className="md:hidden flex justify-center"
        onClick={handleAvatarActive}
      >
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
