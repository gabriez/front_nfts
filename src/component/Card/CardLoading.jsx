import React from "react";
import Eth from "../../Assets/img/Ethereum.png";

function CardLoading() {
  return (
    <div className="animate-pulse flex flex-col w-72 h-[390px] rounded-xl shadow-2xl bg-[#CBD5E1]">
      <div className="relative flex justify-center rounded-t-xl mb-5 w-full h-[15rem] bg-[#94A3B8]">
        <div className="absolute top-1 right-1">
          <svg
            id="heart-svg"
            viewBox="467 392 58 57"
            xmlns="http://www.w3.org/2000/svg"
            style={{"cursor": "default"}}
          >
            <g
              id="Group"
              fill="none"
              fillRule="evenodd"
              transform="translate(467 392)"
            >
              <path
                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                id="heart"
                fill="#AAB8C2"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <h1 className="block w-20 h-[1.8rem] mb-[0.4rem] bg-[#94A3B8]"></h1>
        <h3 className="block h-[1rem] w-24 bg-[#94A3B8]"></h3>
      </div>
      <div className="grid grid-flow-col grid-cols-2 my-5">
        <div className="flex items-center ml-2">
          <img src={Eth} className="w-7 opacity-10" />
          <p className="block h-[1.5rem] w-20 bg-[#94A3B8]"></p>
        </div>

        <button
          className="bg-[#94A3B8] h-[40px] rounded-2xl shadow-lg py-2.5 w-[7rem] ml-6"
          disabled
        ></button>
      </div>
    </div>
  );
}

export default CardLoading;
