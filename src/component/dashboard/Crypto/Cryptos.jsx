import { useEffect, useState } from "react";
import axios from "axios";

const Cryptos = () => {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <div className="w-full">
          {coins.map((coin) => (
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                {coin.name}
              </p>
              <div className="flex items-end space-x-2 my-6">
                <p className="text-5xl text-black dark:text-white font-bold">
                  {coin.symbol}
                </p>
                <span className="text-green-500 text-xl font-bold flex items-center">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  22%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                  <p>Unique URL</p>
                  <div className="flex items-end text-xs">
                    34
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      22%
                    </span>
                  </div>
                </div>
                <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                  <p>Embedded form</p>
                  <div className="flex items-end text-xs">
                    13
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                  <p>New visitor</p>
                  <div className="flex items-end text-xs">
                    45
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      41%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Project Paid
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                23
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                12%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>User paid</p>
                <div className="flex items-end text-xs">
                  21
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    20%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Income</p>
                <div className="flex items-end text-xs">
                  10
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    2%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Royal tees</p>
                <div className="flex items-end text-xs">
                  434
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              New features
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                12
              </p>
              <span className="text-red-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3 rotate-180 transform"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                2%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Down</p>
                <div className="flex items-end text-xs">
                  34
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Up</p>
                <div className="flex items-end text-xs">
                  13
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>No developed</p>
                <div className="flex items-end text-xs">
                  45
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Sign in
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                16
              </p>
              <span className="text-red-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3 transform rotate-180"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                14%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Amercia</p>
                <div className="flex items-end text-xs">
                  43
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Europe</p>
                <div className="flex items-end text-xs">
                  133
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    19%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Asia</p>
                <div className="flex items-end text-xs">
                  23
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Sales
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">9</p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                34%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Templates</p>
                <div className="flex items-end text-xs">
                  345
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Components</p>
                <div className="flex items-end text-xs">
                  139
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    10%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Icons</p>
                <div className="flex items-end text-xs">
                  421
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Maintenance
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                15
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                34%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Cloud</p>
                <div className="flex items-end text-xs">
                  123
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Infra</p>
                <div className="flex items-end text-xs">
                  134
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    9%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Office</p>
                <div className="flex items-end text-xs">
                  23
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptos;
