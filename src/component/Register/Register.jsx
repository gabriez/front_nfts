import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { SERVER_URL } from "../../Contexts/AppProvider";
import { useAppContext } from "../../Contexts/AppProvider";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Register = (props) => {
  const { dispatch } = useAppContext();
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    walletAddress: "",
  });

  const { name, email, password, walletAddress } = formValues;

  function handleLogin() {
    dispatch({ type: "SET_SHOW_LOGIN", value: true });
    dispatch({ type: "SET_SHOW_REGISTER", value: false });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${SERVER_URL}users/register`,
        {
          name,
          email,
          password,
          walletAddress,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then(() => {
        toast.success("Successfully registered", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "toast-success",
          onClose: () => {
            dispatch({ type: "SET_SHOW_LOGIN", value: true });
            dispatch({ type: "SET_SHOW_REGISTER", value: false });
          },
        });
      })
      .catch(() =>
        toast.error("Something went wrong, try again", {
          position: "top-center",
          theme: "colored",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "error-toast",
        })
      );
  };

  const Google = () => {
    window.open(`${SERVER_URL}auth/google`, "_self");
  };

  const Github = () => {
    window.open(`${SERVER_URL}auth/github`, "_self");
  };

  const Facebook = () => {
    window.open(`${SERVER_URL}auth/facebook`, "_self");
  };

  return (
    <motion.div
      className="inset-0 fixed grid place-content-center bg-[rgba(0,0,0,0.6)]  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ scale: 0, transition: { delay: 0.3 } }}
    >
      <motion.div
        className="bg-white relative rounded-lg md:mt-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.4 } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          className="absolute right-0 mr-3 mt-[14px]"
        >
          <button
            className="bg-white rounded-full p-1 shadow-2xl active:scale-[.90] transition-all active:bg-red-600 
             active:text-white hover:bg-red-600 hover:text-white"
            onClick={props.closeModal}
          >
            <AiOutlineCloseCircle size={30} className="text-lg" />
          </button>
        </motion.div>
        {/* <div className="flex flex-row"> */}
        {/* <div className="grid grid-cols-2"> */}

        <div className="flex justify-center items-center mt-3">
          <div className="max-w-[525px] min-w-[320px] mx-auto text-center px-10 sm:px-12 md:px-[60px]">
            <div className="text-center mb-2">
              <h1 className="text-4xl font-['oswald']">Register</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 max-w-max relative pointer-events-none">
                <input
                  className="peer w-64 smaller:w-72 h-12 pointer-events-auto border-2 border-black px-[16px] text-base peer placeholder:text-white focus:outline-none  rounded"
                  type="text"
                  placeholder=" Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <label
                  className="absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white peer-invalid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                >
                  Full name
                </label>
              </div>
              <div className="mb-2 max-w-max relative pointer-events-none">
                <input
                  type="email"
                  placeholder=" Email"
                  className="peer w-64 smaller:w-72 h-12 pointer-events-auto border-2 border-black px-[16px] text-base peer placeholder:text-white focus:outline-none  rounded"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <label
                  className="absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white peer-invalid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                >
                  Email
                </label>
              </div>
              <div className="pointer-events-none mb-2 max-w-max relative">
                <input
                  type="password"
                  placeholder="******"
                  className="peer w-64 smaller:w-72 h-12 pointer-events-auto border-2 border-black px-[16px] text-base peer placeholder:text-white focus:outline-none  rounded"
                  autoComplete="new-password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <label
                  className="  absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white peer-invalid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                >
                  Password
                </label>
              </div>

              <div className="mb-2 max-w-max relative pointer-events-none">
                <input
                  type="text"
                  placeholder="Wallet Address"
                  className="peer w-64 smaller:w-72 h-12 pointer-events-auto border-2 border-black px-[16px] text-base peer placeholder:text-white focus:outline-none  rounded"
                  name="walletAddress"
                  value={walletAddress}
                  onChange={handleInputChange}
                />
                <label
                  className="absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white peer-invalid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                >
                  Wallet Address
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className=" w-64 smaller:w-72 h-12 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 
                        to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                         focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg 
                         shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 
                         font-medium rounded-lg text-sm  text-center border-none"
                >
                  Sign up
                </button>
              </div>

              <div className="mt-5 mb-5 flex flex-col">
                <h1 className="mb-3 text-base text-[#000000]">
                  Sign in with your account:{" "}
                </h1>
                <div className="flex items-center justify-around">
                  <button
                    type="button"
                    className="hover:scale-90 transition-all duration-500"
                    onClick={Google}
                  >
                    <FcGoogle size={42} />
                  </button>
                  <button
                    type="button"
                    className="hover:scale-90 transition-all duration-500"
                    onClick={Facebook}
                  >
                    <BsFacebook size={42} />
                  </button>
                  <button
                    type="button"
                    className="hover:scale-90 transition-all duration-500"
                    onClick={Github}
                  >
                    <BsGithub size={42} />
                  </button>
                </div>
                <p className="text-base text-[#adadad] mt-5">
                  {" "}
                  Already Registered?
                </p>

                <button
                  className="text-base inline-block text-[#adadad]
                   hover:underline hover:text-primary"
                  onClick={handleLogin}
                >
                  {" "}
                  Login here{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </motion.div>
    </motion.div>
  );
};

export default Register;
