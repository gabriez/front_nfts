import { SERVER_URL } from "../../Contexts/AppProvider";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import LikeBtn from "../Card/LikeBtn";

const WishList = () => {
  const [favorites, setFavorites] = useState([]);
  const refs = useRef([]);

  async function handleLike(e) {
    let nftId = e.currentTarget.id;
    await axios
      .post(
        `${SERVER_URL}users/fav`,
        { nftId: nftId },
        {
          headers: {
            Authorization: localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const userFavorites = favorites.filter((nft) => {
    return nft.favorite.isFavorite === true;
  });

  console.log(userFavorites);

  useEffect(() => {
    const getFavorites = async () => {
      await axios
        .get(`${SERVER_URL}users/fav`, {
          headers: {
            Authorization: localStorage.getItem("userToken"),
          },
        })
        .then((data) => {
          setFavorites(data.data[0].favorites);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFavorites();
    userFavorites.map((nft, index) => {
      refs.current[index].checked = true;
    });
  }, [userFavorites]);

  return (
    <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Lastest favorites
            </h3>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {userFavorites.map((favorite, index) => (
                <li className="py-3 sm:py-4" key={favorite.id}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={favorite.img}
                        alt="NFT image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {favorite.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {favorite.tokenId}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      ${favorite.usdPrice}
                    </div>
                    <div>
                      <button
                        className=""
                        id={favorite.id}
                        onClick={handleLike}
                      >
                        <LikeBtn
                          id={favorite.id}
                          active={true}
                          ref={(e) => {
                            refs.current[index] = e;
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
