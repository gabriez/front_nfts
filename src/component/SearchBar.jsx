import axios from "axios";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useAppContext } from "../Contexts/AppProvider";
import { SERVER_URL } from "../Contexts/AppProvider";

const SearchBar = () => {
  const { dispatch, nfts } = useAppContext();
  const [query, setQuery] = useState("");

  function handleInputChanges(e) {
    e.preventDefault();
    setQuery(e.target.value);
    axios
      .get(`${SERVER_URL}nft/search`, {
        params: {
          nft: e.target.value,
        },
      })
      .then((res) => {
        dispatch({ type: "FILTER_NFTS", value: res.data });
      });
  }

  function getIndex(id) {
    const index = nfts.findIndex((item) => item.id === id);
    dispatch({ type: "INDEX_CARD", value: index });
  }

  const handleClear = (e) => {
    setQuery("");
    // const id = e.currentTarget.id;
    // dispatch({ type: "SET_MODAL", value: true });
    // let nftId = nfts.filter((item) => item.id === id);
    // getIndex(nftId);
  };

  return (
    <div className="relative text-gray-300 align-middle md:block w-max">
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search Nft´s by name"
        className={
          "placeholder:text-gray-300 font-semibold bg-gray-600 w-60 h-10 px-4 pr-10 rounded-full text-sm focus:outline-none transition-all duration-2000 ease-in-out group-hover:bg-white group-focus-within:bg-white"
        }
        onChange={(e) => handleInputChanges(e)}
      />
      <button
        type="submit"
        className=" absolute right-0 top-0 mt-2.5 mr-1 text-white group-hover:text-gray-600 group-focus-within:text-gray-600"
      >
        <BiSearch
          size={28}
          color="#343434"
          className=" bg-slate-100 rounded-full px-1 mx-2 -my-1"
        />
      </button>
      {query?.length > 0 && (
        <div className="-mt-[16px] rounded-b-md w-[240px] max-h-[200px] bg-gray-600 -z-10 shadow-2xl overflow-hidden overflow-y-auto absolute searchScrollbar">
          {nfts.length === 0 ? (
            <p className="mt-4 first:border-t-[1px] text-lg text-black FontMedium text-center">
              No results found
            </p>
          ) : (
            nfts.map((e) => {
              return (
                <button
                  key={e.id}
                  className="first:mt-4 first:border-t-[1px] w-full h-[50px] flex items-center text-white hover:bg-[#d3d3d3] hover:text-black transition-all duration-300"
                  onClick={(e) => handleClear(e)}
                >
                  <p className="ml-5 text-sm">{e.name}</p>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
