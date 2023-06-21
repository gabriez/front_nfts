import { NavLink } from "react-router-dom";
import Logo from "../Assets/favicon.png";

const Footer = () => {
  return (
    <div>
      <footer className="text-white font-bold uppercase  ">
        <div className="text-center p-1 bg-black">
          <div className="mb-2">
            <NavLink to="/" className="flex justify-center">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "50px" }}
                className="cursor-pointer"
              />
              <h6 className="mx-3 flex items-center">NFT Marketplace</h6>
            </NavLink>
          </div>
          <span>
            {"Copyright © "} {new Date().getFullYear()}.
          </span>
          <p className="font-semibold">
            This SPA was developed by NoCountry Cohorte 5 Group 08.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
