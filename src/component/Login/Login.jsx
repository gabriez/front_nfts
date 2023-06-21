import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import useForm from "../../hooks/useForm";
import ethereum from "./img/ethereum.png";
import axios from "axios";
import { useAppContext, SERVER_URL } from "../../Contexts/AppProvider";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import moment from "moment";
import { toast } from "react-toastify";

const Login = (props) => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  function handleRegister() {
    dispatch({ type: "SET_SHOW_REGISTER", value: true });
    dispatch({ type: "SET_SHOW_LOGIN", value: false });
  }

  const { email, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${SERVER_URL}users/login`,
        { email, password },
        { withCredentials: true, credentials: "include" }
      )
      .then((data) => {
        const expires = moment().add(data.data.expiresIn);
        localStorage.setItem("userToken", data.data.token);
        localStorage.setItem("tokenExpiration", JSON.stringify(expires));
        sessionStorage.setItem("user", JSON.stringify(data.data.user));
        toast.success("Login correctly", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          className: "toast-success",
          onClose: () => {
            dispatch({ type: "SET_SHOW_LOGIN", value: false }),
              navigate("/dashboard/index");
          },
        });
      })
      .catch(() => {
        toast.error("Something went wrong, try again", {
          position: "top-center",
          theme: "colored",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          className: "error-toast",
        });
      });
  };

  const Google = () => {
    axios.get(`${SERVER_URL}auth/google`).then((res) => {
      let newWindow = window.open(
        `${SERVER_URL}auth/google`,
        "Axios data",
        "_blank",
        "width=400,height=400"
      );
      newWindow.document.write(JSON.stringify(res));
    });
  };

  const Github = () => {
    window.open(`${SERVER_URL}auth/github`, "_self");
  };

  const Facebook = () => {
    window.open(`${SERVER_URL}auth/facebook`, "_self");
  };

  return (
    <motion.div
      className="inset-0 fixed grid place-content-center bg-[rgba(0,0,0,0.6)] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ scale: 0, transition: { delay: 0.3 } }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.4 } }}
      >
        <section className="py-20 lg:py-[120px] flex justify-center md:mt-16">
          <div className="flex justify-center">
            <div className="relative mx-auto text-center bg-white overflow-hidden px-10 md:px-[60px] rounded-lg py-2">
              <div className="absolute top-2 left-0 ml-3">
                <img src={ethereum} className="smaller:w-[11%] w-[14%]" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                className="absolute right-0 mr-4 top-3 "
              >
                <button
                  className="bg-white rounded-full p-1 shadow-2xl active:scale-[.90] transition-all active:bg-red-600 
                       active:text-white hover:bg-red-600 hover:text-white"
                  onClick={props.closeModal}
                >
                  <AiOutlineCloseCircle size={30} className="text-lg" />
                </button>
              </motion.div>

              <div className="mb-5 mt-1 text-center">
                <h1 className="text-4xl font-['oswald']">Login</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="pointer-events-none mb-3 max-w-max relative">
                  <input
                    type="text"
                    className="smaller:w-72 border-black py-3 border-2 px-[16px] pointer-events-auto text-base peer placeholder:text-white focus:outline-none  rounded"
                    name="email"
                    id="email_login"
                    autoComplete="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="email_login"
                    className="absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white peer-invalid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                  >
                    Email
                  </label>
                </div>
                <div className="pointer-events-none mb-3 max-w-max relative">
                  <input
                    type="password"
                    placeholder="******"
                    className="smaller:w-72 border-black py-3 border-2 px-[16px] pointer-events-auto text-base peer placeholder:text-white focus:outline-none rounded"
                    id="password_login"
                    name="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="password_login"
                    className="absolute peer-placeholder-shown:top-[30%] peer-placeholder-shown:left-5 
                      peer-placeholder-shown:text-base text-xs -top-[12%] left-2 peer-focus:-top-[12%] peer-focus:left-2 peer-focus:text-xs
                     peer-focus:bg-white peer-valid:bg-white px-[2px] transition-all duration-[.8s] ease-in-out"
                  >
                    Password
                  </label>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-[236.667px] smaller:w-72 h-12 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 
                        to-cyan-600 hover:bg-gradient-to-br  focus:outline-none
                         focus:ring-cyan-300  shadow-lg 
                         shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 
                         font-medium rounded-lg text-sm  text-center border-none"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-base mb-6 text-[#000000]">Connect With</p>
              <div className="flex justify-around mb-4">
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
              <Link
                to="/register"
                className=" text-base inline-block mb-2 text-[#adadad]
                    hover:underline hover:text-primary"
              >
                Forget Password?
              </Link>
              <p className="text-base text-[#adadad]">
                Not a member yet?
                <button
                  onClick={handleRegister}
                  className="mx-2 text-primary hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Login;
