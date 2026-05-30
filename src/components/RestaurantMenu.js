//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
 // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const[showIndex,setShowIndex]=useState(0);

  const resInfo=useRestaurantMenu(resId);

  const categories =
  resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.flatMap((c) => c?.card?.card?.itemCards || []) || []);

 /* useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}`
        );

        const json = await res.json();
        setResInfo(json?.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchMenu();
  }, [resId]);  */

  // Loading state
  if (!resInfo) return <Shimmer />;

  // Restaurant details
  const restaurant =
    resInfo?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info;

  // Correct menu extraction
  // const menuItems =
  //   resInfo?.cards
  //     ?.find((card) => card?.groupedCard)
  //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  //     ?.flatMap((c) => c?.card?.card?.itemCards || []) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurant?.name}</h1>
      <h2 className="font-bold text-lg">{restaurant?.cuisines?.join(", ")}</h2>

      {categories.map((category,index) => (
  <RestaurantCategory
    key={category?.card?.card?.title}
    data={category?.card?.card}

    showItems={index===showIndex?true:false}
    setShowIndex={()=>setShowIndex(index)}
  />
))}


   { /**  <h3>Menu</h3>
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => {
            const info = item?.card?.info;
            const price =
              (info?.price || info?.defaultPrice || 0) / 100;

            return (
              <li key={`${info?.id}-${index}`}>
                {info?.name} - ₹{price}
              </li>
            );
          })
        ) : (
          <li>No menu items available</li>
        )}
      </ul> */ }
    </div>
  );
};

export default RestaurantMenu;