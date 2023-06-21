import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { useAppContext } from "../../Contexts/AppProvider";
import axios from "axios";
import { SERVER_URL } from "../../Contexts/AppProvider";

const AvatarDropDown = () => {
  const { dispatch,showNav, avatarActive, user } = useAppContext();
  const navigate = useNavigate();

  function handleLogin() {
    dispatch({ type: "SET_SHOW_LOGIN", value: true });
    dispatch({ type: "SET_SHOW_REGISTER", value: false });
    dispatch({ type: "SHOW_AVATAR", value: false });
  }

  function handleRegister() {
    dispatch({ type: "SET_SHOW_REGISTER", value: true });
    dispatch({ type: "SET_SHOW_LOGIN", value: false });
    dispatch({ type: "SHOW_AVATAR", value: false });
  }

  function Logout() {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "SHOW_AVATAR", value: false });
    axios.delete(
      `${SERVER_URL}auth/logout`,
      {
        withCredentials: true,
      },
      localStorage.removeItem("userToken"),
      localStorage.removeItem("tokenExpiration"),
      sessionStorage.removeItem("user")
    );
  }

  const handleActive = () => {
    if (showNav === false) {
      dispatch({ type: "SHOW_AVATAR", value: !avatarActive });
    }
  };
  useEffect(() => {
    if (showNav) {
      dispatch({ type: "SHOW_AVATAR", value: false });
    }
  }, [showNav]);

  if (Object.keys(user).length > 0) {
    return (
      <div className="relative">
        <div
          onClick={handleActive}
          className="relative cursor-pointer rounded-full
  opacity-100 hover:opacity-90 transition duration-300 ease-in-out 
  hover:rounded-full w-auto"
        >
          <img
            src={user.img}
            alt="userImage"
            className="rounded-full w-11 h-auto m-auto mb-1"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm capitalize text-center">{user.name}</p>
        </div>

        {avatarActive && (
          <div className="absolute transition duration-300 z-30 -right-[10px] mt-1 font-semibold bg-gray-200 divide-y divide-zinc-400 rounded-lg shadow-xl w-32">
            <button
              className="block px-4 py-3 text-base text-right w-[100%] text-gray-700 transition duration-[.7s] ease-in-out
                  hover:bg-gray-900 rounded-t-lg hover:opacity-90
                 hover:text-white"
              onClick={() => {
                navigate("/dashboard/index");
              }}
            >
              Dashboard
            </button>
            <button
              className="block px-4 py-3 text-base text-right w-[100%] text-gray-700 transition duration-[.7s] ease-in-out
         hover:bg-gray-900 rounded-b-lg hover:opacity-90
        hover:text-white"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative">
        <div>
          <BiUserCircle
            onClick={handleActive}
            className="relative cursor-pointer rounded-full
        opacity-100 hover:opacity-90 duration-300 ease-in-out 
        hover:rounded-full bg-amber-700 w-11 h-11 transition-all"
          />
        </div>
        {avatarActive && (
          <div className=" absolute transition duration-300 right-0 z-30 mt-1 font-semibold bg-gray-200 divide-y divide-zinc-400 rounded-lg shadow-xl w-32">
            <button
              className="block px-4 py-3 text-base text-right w-[100%] text-gray-700 transition duration-[.7s] ease-in-out
                  hover:bg-gray-900 rounded-t-lg hover:opacity-90
                 hover:text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="block px-4 py-3 text-base text-right w-[100%] text-gray-700 transition duration-[.7s] ease-in-out
         hover:bg-gray-900 rounded-b-lg hover:opacity-90
        hover:text-white"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    );
  }
};
export default AvatarDropDown;
