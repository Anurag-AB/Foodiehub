import RestaurantCard, {
  withPromotedLabel,
} from "./RestaurantCard";

import {
  useContext,
  useEffect,
  useState,
} from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body = () => {

  // STATES

  const [listOfRestaurants, setListOfRestaurants] =
    useState([]);

  const [filteredRestaurant, setFilteredRestaurant] =
    useState([]);

  const [searchText, setSearchText] = useState("");

  // HOC COMPONENT

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // CONTEXT API

  const { loggedInUser, setUserName } =useContext(UserContext);

  // ONLINE STATUS

  const onlineStatus =useOnlineStatus();

  // FETCH DATA

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants =
        json?.data?.cards
          ?.map((card) => card?.card?.card)
          ?.find(
            (c) =>
              c?.gridElements?.infoWithStyle
                ?.restaurants
          )
          ?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(
        restaurants
      );

      setFilteredRestaurant(
        restaurants
      );

    } catch (error) {

      console.log(
        "Error Fetching Data:",
        error
      );
    }
  };

  // OFFLINE PAGE

  if (onlineStatus === false) {

    return (

      <h1
        className="
          text-center
          text-3xl
          font-bold
          text-red-500
          mt-10
        "
      >
        Please Check Your Internet
        Connection !!
      </h1>
    );
  }

  // SHIMMER UI

  if (
    listOfRestaurants.length === 0
  ) {

    return <Shimmer />;
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* SEARCH + FILTER + USER */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-5
          p-6
        "
      >

        {/* SEARCH BAR */}

        <div
          className="
            flex
            items-center
            bg-white
            rounded-2xl
            shadow-md
            px-3
            py-2
          "
        >

          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
            className="
              outline-none
              px-4
              py-2
              w-64
              text-gray-700
            "
          />

          <button
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-5
              py-2
              rounded-xl
              font-semibold
              transition-all
            "
            onClick={() => {

              const filtered =
                listOfRestaurants.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(
                        searchText.toLowerCase()
                      )
                );

              setFilteredRestaurant(
                filtered
              );
            }}
          >
            Search
          </button>

        </div>

        {/* TOP RATED BUTTON */}

        <button
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            px-5
            py-3
            rounded-2xl
            shadow-md
            font-semibold
            transition-all
          "
          onClick={() => {

            const filteredList =
              listOfRestaurants.filter(
                (res) =>
                  res.info.avgRating > 4
              );

            setFilteredRestaurant(
              filteredList
            );
          }}
        >
          Top Rated Restaurants
        </button>

        {/* USER PROFILE */}

        <div
          className="
            flex
            items-center
            gap-4
            bg-white
            px-5
            py-3
            rounded-2xl
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
            border
            border-gray-100
          "
        >

          {/* PROFILE IMAGE */}

          <div className="relative">

            <img
              className="
                w-12
                h-12
                rounded-full
                object-cover
                border-2
                border-orange-400
              "
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user"
            />

            {/* ONLINE DOT */}

            <span
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                bg-green-500
                border-2
                border-white
                rounded-full
              "
            ></span>

          </div>

          {/* USER INFO */}

          <div className="flex flex-col">

            <span
              className="
                text-xs
                text-gray-500
                font-medium
              "
            >
              Welcome Back 👋
            </span>

            <input
              type="text"
              value={loggedInUser}
              onChange={(e) =>
                setUserName(
                  e.target.value
                )
              }
              placeholder="Enter your name"
              className="
                bg-transparent
                outline-none
                text-lg
                font-bold
                text-gray-800
                border-b-2
                border-orange-400
                focus:border-orange-600
                transition-all
                duration-300
                w-[180px]
              "
            />

          </div>
        </div>
      </div>

      {/* RESTAURANT CARDS */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-8
          px-6
          py-8
        "
      >

        {filteredRestaurant.map(
          (restaurant) => (

            <Link
              key={
                restaurant.info.id
              }
              to={
                "/restaurants/" +
                restaurant.info.id
              }
              className="w-[260px]"
            >

              <div
                className="
                  h-[420px]
                  transition-all
                  duration-300
                "
              >

                {
                  restaurant?.info
                    ?.avgRating > 4.5 ? (

                    <RestaurantCardPromoted
                      resData={
                        restaurant
                      }
                    />

                  ) : (

                    <RestaurantCard
                      resData={
                        restaurant
                      }
                    />
                  )
                }

              </div>

            </Link>
          )
        )}

      </div>
    </div>
  );
};

export default Body;