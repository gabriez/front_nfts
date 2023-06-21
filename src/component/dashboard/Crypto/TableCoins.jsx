import { useState, useRef } from "react";
import CoinRow from "./CoinRow";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const titles = ["#", "Crypto", "Price", "Price Change", "24 Hs Volume"];

const TableCoins = ({ coins, search }) => {
  const quantityPageRef = useRef(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(10);

  const handlePagination = (index) => {
    setEndPosition((index + 1) * quantityPageRef.current);
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    );
  };

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current);
      setEndPosition(endPosition - quantityPageRef.current);
    }
  };

  const handleNext = () => {
    if (endPosition < coins.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current);
      setEndPosition(endPosition + quantityPageRef.current);
    }
  };

  const filterCoins =
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    ) || coins.symbol.toLowerCase().includes(search.toLowerCase());

  return (
    <>
      <div className="w-full flex items-center justify-center bg-gray-900">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible">
            <table className="table text-gray-400 border-separate space-y-6 text-sm">
              <thead className="bg-gray-800 text-gray-500">
                <tr className="text-center">
                  {titles.map((title, index) => (
                    <td className="p-3" key={index}>
                      {title}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="text-center">
                {filterCoins
                  .slice(currentIndex, endPosition)
                  .map((coin, index) => (
                    <CoinRow coin={coin} key={index} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n",
          }}
        />
      </div>

      <div className="w-full flex items-center justify-center bg-gray-900">
        <div className="flex items-center justify-center mt-3 mb-3 text-white">
          <button className="mx-3" onClick={handlePrev}>
            <BsFillArrowLeftCircleFill
              size={30}
              className="hover:bg-teal-600 rounded-full"
            />
          </button>
          <div className="flex items-center text-xl">
            {Array(Math.ceil(filterCoins.length / quantityPageRef.current))
              .fill(null)
              .map((_, index) => (
                <button
                  className={`${
                    currentIndex === 1 && index === currentIndex
                      ? "m-3 mx-2 w-10 h-10 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full"
                      : index === currentIndex / quantityPageRef.current &&
                        "m-3 mx-2 w-10 h-10 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white"
                  }`}
                  onClick={() => handlePagination(index)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
          <button className="mx-3" onClick={handleNext}>
            <BsFillArrowRightCircleFill
              size={30}
              className="hover:bg-teal-600 rounded-full"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TableCoins;
