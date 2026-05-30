import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Redux Store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 ">

        {/* LOGO SECTION */}
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-40 hover:scale-105 transition-all duration-300 w-32 md:w-36"
              src={LOGO_URL}
              alt="logo"
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center">
          <ul className="flex items-center gap-8 text-[17px] font-medium">

            {/* ONLINE STATUS */}
            <li className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>

              {onlineStatus ? (
                <span className="text-green-600 font-bold">
                  Online ✅
                </span>
              ) : (
                <span className="text-red-600 font-bold">
                  Offline 🛑
                </span>
              )}
            </li>

            {/* NAV LINKS */}
            <li>
              <Link
                className="hover:text-orange-500 transition-all duration-200"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-orange-500 transition-all duration-200"
                to="/about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-orange-500 transition-all duration-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-orange-500 transition-all duration-200"
                to="/grocery"
              >
                Grocery
              </Link>
            </li>

            {/* CART */}
            <li>
              <Link
                className="relative hover:text-orange-500 transition-all duration-200 font-bold"
                to="/cart"
              >
                🛒 Cart

                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            {/* LOGIN BUTTON */}
            <li>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </li>

            {/* USER NAME */}
            <li className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user"
              />

              <span className="font-semibold text-gray-700">
                {loggedInUser}
              </span>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;