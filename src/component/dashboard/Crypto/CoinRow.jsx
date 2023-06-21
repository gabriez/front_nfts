const CoinRow = ({ coin }) => {
  return (
    <>
      <tr className="bg-gray-800">
        <td className="p-3">{coin.market_cap_rank}</td>
        <td className="p-3">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src={coin.image}
              alt={coin.name}
            />
            <div className=" w-[94px] ml-1 sm:ml-0 sm:w-[150px]">
              <div className="text-gray-400 hover:text-gray-100 mr-2 capitalize">
                {coin.name}
              </div>
              <div className="text-gray-500 hover:text-gray-100 mr-2 uppercase">
                {coin.symbol}
              </div>
            </div>
          </div>
        </td>
        <td className="p-3 text-gray-400 hover:text-gray-100 mr-2">
          ${coin.current_price}
        </td>
        <td
          className={
            coin.price_change_percentage_24h > 0
              ? " p-3 font-bold text-green-700 hover:text-white mr-2"
              : " p-3 font-bold text-red-400 hover:text-gray-100 mr-2"
          }
        >
          {coin.price_change_percentage_24h}
        </td>
        <td className="p-3">
          <span className="bg-gray-700 text-gray-50 rounded-md px-2">
            {coin.total_volume}
          </span>
        </td>
      </tr>
    </>
  );
};

export default CoinRow;
