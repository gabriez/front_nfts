import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SWRConfig } from "swr";
import "./index.css";
import "./fonts/GT-Walsheim-Regular-Trial.woff2";
import "./fonts/GT-Walsheim-Bold-Trial.woff2";
import "./fonts/GT-Walsheim-Medium-Trial.woff2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// React version 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // SWR Config
  <SWRConfig
    value={{
      fetcher: (...args) => {
        fetch(...args).then((res) => res.json());
      },

      suspense: true,
    }}
  >
    <App />
    <ToastContainer/>
  </SWRConfig>
);

// React version 17
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
