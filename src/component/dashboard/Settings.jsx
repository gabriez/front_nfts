import { useState, useEffect } from "react";
import { useSessionStorage } from "../../hooks/useStorage";
import { useAppContext, SERVER_URL } from "../../Contexts/AppProvider";
import { CgSpinner } from "react-icons/cg";
import { FcEditImage } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [usuario, setUsuario] = useState({
    name: "",
    email: "",
    password: "",
    walletAddress: "",
    img: "",
  });

  const [loading, setLoading] = useState(false);
  const imgLoaded = () => {
    if (usuario.img.length !== 0) {
      setLoading(false);
    }
  };

  const { user } = useAppContext();

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${SERVER_URL}users/edit`,
        {
          id: user.id,
          name: usuario.name,
          email: usuario.email,
          password: usuario.password,
          walletAddress: usuario.walletAddress,
          img: usuario.img,
        },
        {
          headers: {
            Authorization: localStorage.getItem("userToken"),
          },
        }
      )
      .then(() => {
        setUsuario({
          name: "",
          email: "",
          password: "",
          walletAddress: "",
          img: "",
        });
        toast.success("Your profile has been updated", {
          autoClose: 1500,
          onClose: () => {
            window.location.reload();
          },
        });
      })
      .catch((err) => {
        toast.error("There was an error changing your info, try again", {
          autoClose: 1500,
        });
        console.log(err);
      });
  };

  function changeImg() {
    let photos = document.getElementById("input_img");
    Array.from(photos.files).map(async (photo) => {
      const body = new FormData();
      body.set("key", "64fe53bca6f3b1fbb64af506992ef957");
      body.append("image", photo);

      await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      })
        .then((response) => {
          setUsuario({
            ...usuario,
            img: response.data.data.url,
          });
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  return (
    <div className="w-100 h-screen">
      <></>
      <div className="">
        <div className="relative h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute opacity-60 inset-0 z-0" />
          <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-lg z-10">
            <div className="grid  gap-8 grid-cols-1">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row items-center">
                  <h2 className="font-semibold text-lg mr-auto">
                    Change your data
                  </h2>
                  <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <div className="form">
                      <div className="md:space-y-2 mb-3">
                        <div className="flex items-center justify-center">
                          <div className="w-60 h-60 flex-none rounded-xl border overflow-hidden relative">
                            {usuario.img === "" ? (
                              <img
                                className={
                                  loading ? "hidden" : "w-60 h-60 object-cover"
                                }
                                src={user.img}
                                alt={user.name}
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <img
                                className={
                                  loading ? "hidden" : "w-60 h-60 object-cover"
                                }
                                src={usuario.img}
                                alt={user.name}
                                onLoad={imgLoaded}
                                referrerPolicy="no-referrer"
                              />
                            )}
                            {loading && (
                              <CgSpinner className="animate-spin w-full h-full" />
                            )}
                            <input
                              type="file"
                              name="img"
                              className="hidden"
                              accept="image/*"
                              id="input_img"
                              onChange={changeImg}
                            />
                            <label
                              htmlFor="input_img"
                              className="absolute right-1 top-1 cursor-pointer bg-none border-none"
                            >
                              {loading === true ? null : (
                                <FcEditImage className="w-8 h-8 hover:scale-125 transition-all" />
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex flex-row md:space-x-4 w-full text-xs mt-5">
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className="font-semibold text-gray-600 py-2">
                            Name and Surname
                          </label>
                          <input
                            placeholder={user.name}
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            name="name"
                            autoComplete="name"
                            id="name"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={usuario.name}
                          />
                          <p className="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className="font-semibold text-gray-600 py-2">
                            Email
                          </label>
                          <input
                            placeholder={user.email}
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            autoComplete="email"
                            name="email"
                            id="email"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={usuario.email}
                          />
                          <p className="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                      </div>
                      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Password
                          </label>
                          <input
                            placeholder="*******"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            id="password"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={usuario.password}
                          />
                        </div>
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Wallet
                          </label>
                          <input
                            placeholder={user.walletAddress}
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            name="walletAddress"
                            id="walletAddress"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={usuario.walletAddress}
                          />
                        </div>
                      </div>
                      <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                          Cancel
                        </button>
                        <button
                          className="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full bg-blue-400 hover:bg-black hover:shadow-lg"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
