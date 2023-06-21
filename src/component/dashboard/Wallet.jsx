import { useEffect, useState } from "react";
import axios from "axios";

const Wallet = () => {
  
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full overflow-auto h-screen pb-24 px-4 md:px-6">
        <div>
          <div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    @import url(\'//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap\');\n    @import url(//pro.fontawesome.com/releases/v5.10.0/css/all.css);\n    @import url(//cdn.jsdelivr.net/npm/cryptocoins-icons@2.9.0/webfont/cryptocoins.css);\n    body {\n        font-family: Poppins, sans-serif;\n    }\n    .rounded-4xl {\n        border-radius: 3.5rem;\n    }\n    .phone-top {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 50%;\n        height: 3rem;\n        z-index: 1;\n    }\n    .phone-top-inner {\n        position: relative;\n        height: 2rem;\n        width: 100%;\n        background-color: #fff;\n        border-bottom-left-radius: 1.5rem;\n        border-bottom-right-radius: 1.5rem;\n    }\n    .phone-top-inner:before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: -1rem;\n        height: 1rem;\n        width: 1rem;\n        border-top-right-radius: 50%;\n        box-shadow: 0.5rem -0.5rem 0 0 #fff;\n    }\n    .phone-top-inner:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: -1rem;\n        height: 1rem;\n        width: 1rem;\n        border-top-left-radius: 50%;\n        box-shadow: -0.5rem -0.5rem 0 0 #fff;\n    }\n',
              }}
            />

            <div className="min-w-screen min-h-screen flex items-center justify-center px-3 py-5 bg-gray-900">
              <div
                className="w-full bg-white text-gray-800 overflow-hidden border-4 border-white rounded-4xl shadow-lg relative"
                style={{ maxWidth: "500px" }}
              >
                <div className="phone-top">
                  <div className="phone-top-inner" />
                </div>
                <div className="w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white">
                  <div className="mb-5">
                    <input
                      type="text"
                      className="w-full text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50"
                      placeholder="Search..."
                    />
                  </div>
                  <h1 className="text-3xl font-light mb-3">Market Overview</h1>
                </div>
                <div className="bg-gray-50 px-2">
                        {coins.map((coin) => (
                  <ul className="relative -top-10">
                    <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                      <div className="flex items-center">
                        <div className="w-16 text-3xl leading-none">
                         <img src={coin.image} alt={coin.name} className='rounded-full  m-2 p-2 me-3'/>
                        </div>
                        <div className="w-full">
                          {coin.name}
                          <span className="ml-3 text-gray-400 uppercase">( {coin.symbol} )</span>
                        </div>
                        <div className="">  
                        <td className="p-3 text-gray-400 hover:text-black mr-2">
                ${coin.current_price}
              </td>
              <td className={coin.price_change_percentage_24h > 0 ? ' p-3 font-bold text-green-700 hover:text-black mr-2' : ' p-3 font-bold text-red-400 hover:text-black mr-2'}>
                {coin.price_change_percentage_24h}
              </td>
              <td className="p-3">
                <span className="bg-gray-700 text-gray-50 rounded-md px-2">
                  {coin.total_volume}
                </span>
              </td>
                         </div>
                     
                      </div>
                    </li>
                  </ul>
                        ))}
                </div>
                <div className="px-5 bg-white pb-2">
                  <div className="flex">
                    <div className="flex-1 group">
                      <a
                        href="#"
                        className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                      >
                        <span className="block px-1">
                          <i className="far fa-home text-xl pt-1 mb-1 block" />
                          <span className="block text-xs pb-1">Home</span>
                        </span>
                      </a>
                    </div>
                    <div className="flex-1 group">
                      <a
                        href="#"
                        className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                      >
                        <span className="block px-1">
                          <i className="far fa-compass text-xl pt-1 mb-1 block" />
                          <span className="block text-xs pb-1">Explore</span>
                        </span>
                      </a>
                    </div>
                    <div className="flex-1 group">
                      <a
                        href="#"
                        className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                      >
                        <span className="block px-1">
                          <i className="far fa-search text-xl pt-1 mb-1 block" />
                          <span className="block text-xs pb-1">Search</span>
                        </span>
                      </a>
                    </div>
                    <div className="flex-1 group">
                      <a
                        href="#"
                        className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                      >
                        <span className="block px-1">
                          <i className="far fa-cog text-xl pt-1 mb-1 block" />
                          <span className="block text-xs pb-1">Settings</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
