import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 py-2">

        {/* LOGO */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            className="w-28 sm:w-32 md:w-36 hover:scale-105 transition-all duration-300"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-6 text-[16px] font-medium">

          {/* ONLINE STATUS */}
          <li className="flex items-center gap-1 text-sm">
            <span className="font-semibold">Status:</span>
            {onlineStatus ? (
              <span className="text-green-600 font-bold">Online ✅</span>
            ) : (
              <span className="text-red-600 font-bold">Offline 🛑</span>
            )}
          </li>

          <li>
            <Link className="hover:text-orange-500 transition-all duration-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-500 transition-all duration-200" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-500 transition-all duration-200" to="/contact">
              Contact
            </Link>
          </li>
         {/* <li>
            <Link className="hover:text-orange-500 transition-all duration-200" to="/grocery">
              Grocery
            </Link>
          </li> */}

          {/* CART */}
          <li>
            <Link
              className="relative hover:text-orange-500 transition-all duration-200 font-bold"
              to="/cart"
            >
              🛒 Cart
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full ml-1">
                {cartItems.length}
              </span>
            </Link>
          </li>

          {/* LOGIN */}
          <li>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 text-sm"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>

          {/* USER */}
          <li className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full shadow-sm">
            <img
              className="w-7 h-7 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user"
            />
            <span className="font-semibold text-gray-700 text-sm">
              {loggedInUser}
            </span>
          </li>
        </ul>

        {/* MOBILE RIGHT SIDE — Cart + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">

          {/* CART ICON */}
          <Link to="/cart" className="relative font-bold text-xl">
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
              {cartItems.length}
            </span>
          </Link>

          {/* HAMBURGER */}
          <button
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">

          {/* USER ROW */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <img
                className="w-7 h-7 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user"
              />
              <span className="font-semibold text-gray-700 text-sm">
                {loggedInUser}
              </span>
            </div>

            {/* ONLINE STATUS */}
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-gray-600">Status:</span>
              {onlineStatus ? (
                <span className="text-green-600 font-bold">Online ✅</span>
              ) : (
                <span className="text-red-600 font-bold">Offline 🛑</span>
              )}
            </div>
          </div>

          {/* NAV LINKS */}
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          // { label: "Grocery", to: "/grocery" }, 
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium text-base hover:text-orange-500 transition-all duration-200 border-b border-gray-100 pb-2"
            >
              {label}
            </Link>
          ))}

          {/* LOGIN BUTTON */}
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-all duration-300 w-full"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
              setMenuOpen(false);
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;