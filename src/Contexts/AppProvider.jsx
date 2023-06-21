import React, { useReducer, createContext, useContext } from "react";
// export const SERVER_URL = "https://nftmarketplace-back.up.railway.app/";
export const SERVER_URL = "http://localhost:9000/";

const initialState = {
  showLogin: false,
  showRegister: false,
  modal: false,
  modalNft: false,
  indexCard: null,
  indexNft: null,
  userToken: null,
  showCheckout: false,
  nfts: [],
  showNav: false,
  avatarActive: false,
};

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.value,
      };

    case "SET_MODAL_NFT":
      return {
        ...state,
        modalNft: action.value,
      };

    case "INDEX_CARD":
      return {
        ...state,
        indexCard: action.value,
      };

    case "INDEX_NFT":
      return {
        ...state,
        indexNft: action.value,
      };

    case "SET_SHOW_LOGIN":
      return {
        ...state,
        showLogin: action.value,
      };
    case "SET_SHOW_REGISTER":
      return {
        ...state,
        showRegister: action.value,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userToken: null,
        user: [],
      };

    case "SET_SHOW_CHECKOUT":
      return {
        ...state,
        showCheckout: action.value,
      };

    case "SET_NFTS":
      return {
        ...state,
        nfts: action.value,
      };

    case "FILTER_NFTS":
      return {
        ...state,
        nfts: action.value,
      };

    case "SET_SHOW_NAV":
      return {
        ...state,
        showNav: action.value,
      };

    case "SHOW_AVATAR":
      return {
        ...state,
        avatarActive: action.value,
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = JSON.parse(
    sessionStorage.getItem("user") ? sessionStorage.getItem("user") : "{}"
  );

  return (
    <AppContext.Provider
      value={{
        dispatch,
        modal: state.modal,
        modalNft: state.modalNft,
        indexCard: state.indexCard,
        indexNft: state.indexNft,
        userToken: state.userToken,
        user: user,
        showLogin: state.showLogin,
        showRegister: state.showRegister,
        isLoggedIn: state.isLoggedIn,
        showCheckout: state.showCheckout,
        nfts: state.nfts,
        showNav: state.showNav,
        avatarActive: state.avatarActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
