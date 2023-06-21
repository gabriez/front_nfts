import { NavLink, useNavigate } from "react-router-dom";
import { SiEthereum, SiBitcoincash } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { AiOutlineSetting, AiOutlineLogout, AiFillHeart } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { useAppContext, SERVER_URL } from "../../Contexts/AppProvider";
import axios from "axios";

const NavBarDashboardUser = () => {
  const { dispatch, user } = useAppContext();

  const navigate = useNavigate();

  function Logout() {
    dispatch({ type: "LOGOUT" });
    axios.delete(
      `${SERVER_URL}auth/logout`,
      {
        withCredentials: true,
      },
      localStorage.removeItem("userToken"),
      localStorage.removeItem("tokenExpiration"),
      sessionStorage.removeItem("user")
    );
    navigate("/");
  }

  function goToHome() {
    navigate("/");
  }

  return (
    <div>
      <div className="overflow-y-auto  shadow-lg relative w-80 opacity-100">
        <div className="overflow-y-auto bg-white dark:bg-gray-700 h-screen">
          <div className="pt-3 flex items-center justify-center">
            <SiEthereum size={40} className="mx-2 dark:text-white" />
            <span className="font-semibold dark:text-white text-xl">
              <p>NFT MKP</p>
            </span>
            <SiEthereum size={40} className="mx-2 dark:text-white" />
          </div>
          <br />
          <hr className="my-2 text-gray-600" />
          <nav className="mt-3">
            <div>
              <div className="flex justify-center">
                <img
                  src={user.img}
                  alt="userImage"
                  className="w-14 rounded-full"
                />
              </div>
              <div className="text-center mt-2">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Hello {user.name}
                </h1>
              </div>
              <hr className="my-2 text-gray-600" />
              <NavLink
                to={"index"}
                className={({ isActive }) =>
                  isActive
                    ? "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4"
                    : "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                }
              >
                <span className="text-left">
                  <MdDashboard size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Dashboard</span>
              </NavLink>

              <NavLink
                to={"myProfile"}
                className={({ isActive }) =>
                  isActive
                    ? "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4"
                    : "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                }
              >
                <span className="text-left">
                  <ImProfile size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">My Profile</span>
              </NavLink>

              <NavLink
                to={"wallet"}
                className={({ isActive }) =>
                  isActive
                    ? "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4"
                    : "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                }
              >
                <span className="text-left">
                  <SiBitcoincash size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Wallet</span>
              </NavLink>
              <NavLink
                to={"wishList"}
                className={({ isActive }) =>
                  isActive
                    ? "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4"
                    : "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                }
              >
                <span className="text-left">
                  <AiFillHeart size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Wish List</span>
              </NavLink>

              <NavLink
                to={"settings"}
                className={({ isActive }) =>
                  isActive
                    ? "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4"
                    : "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                }
              >
                <span className="text-left">
                  <AiOutlineSetting size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Settings</span>
              </NavLink>

              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                onClick={goToHome}
              >
                <span className="text-left">
                  <GoHome size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Home</span>
              </button>

              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                onClick={Logout}
              >
                <span className="text-left">
                  <AiOutlineLogout size={30} />
                </span>
                <span className="mx-4 text-sm font-normal">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBarDashboardUser;
