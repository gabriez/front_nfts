import { useEffect, useState } from "react";
import { useAppContext } from "../../Contexts/AppProvider";
import { SiZcash } from "react-icons/si";
import { GrBitcoin } from "react-icons/gr";
import axios from "axios";
import TableCoins from "./Crypto/TableCoins";
import Cryptos from "./Crypto/Cryptos";

const IndexDashboard = () => {
  const { user } = useAppContext();

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex items-start justify-between pt-[35px] lg:pt-0 ">
      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
            <div className="w-full md:w-6/12">
              <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                <span className="w-full h-full block">
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <SiZcash
                        size={35}
                        className="bg-green-400 rounded-full p-1"
                      />
                      <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                        user cash
                      </p>
                    </div>
                    <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                      fake cash $44,453.39
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100">
                    <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex items-center w-full md:w-1/2 space-x-4">
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    12
                  </p>
                  <p className="text-gray-400 text-sm">movimientos del user</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    $93.76
                  </p>
                  <p className="text-gray-400 text-sm">bitcoins del user</p>
                  <span className="rounded-full absolute p-1 bg-orange-500 top-2 right-4">
                    <GrBitcoin size={35} />
                  </span>
                  <div className="bg-black w-100 h-100 text-white text-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              'fecha y hora' ultima conexion del usuario {user.name}
            </span>
          </div>
          <Cryptos />
          <div className="flex justify-center relative text-gray-600 mb-3">
            <input
              type="search"
              name="serch"
              placeholder="Search Crypto"
              className="bg-white h-10 px-6 pr-10 rounded-full text-sm focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <TableCoins coins={coins} search={search} />
        </div>
      </div>
    </div>
  );
};

export default IndexDashboard;
