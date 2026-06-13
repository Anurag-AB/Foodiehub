import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;

  return (

    <div
      className="
        p-3
    w-full
    h-[380px]
    rounded-2xl
    bg-white
    shadow-md
    hover:shadow-2xl
    hover:scale-105
    transition-all
    duration-300
    flex
    flex-col
      "
    >

      {/* IMAGE */}

      <img
        className="
          rounded-xl
          w-full
          h-[180px]
          object-cover
        "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* CONTENT */}

      <div className="flex flex-col flex-grow mt-4">

        {/* NAME */}

        <h3
          className="
            font-bold
            text-lg
            text-gray-800
            line-clamp-1
          "
        >
          {name}
        </h3>

        {/* CUISINES */}

        <h4
          className="
            text-gray-600
            text-sm
            mt-2
            line-clamp-2
            min-h-[45px]
          "
        >
          {cuisines?.join(", ")}
        </h4>

        {/* DETAILS */}

        <div
          className="
            mt-auto
            space-y-2
            text-sm
            font-medium
            text-gray-700
          "
        >

          <h4>⭐ {avgRating}</h4>

          <h4>{costForTwo}</h4>

          <h4>🚚 {sla?.deliveryTime} mins</h4>

        </div>
      </div>
    </div>
  );
};

// HIGHER ORDER COMPONENT
// RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (
  RestaurantCard
) => {

  return (props) => {

    return (

      <div className="relative">

        {/* PROMOTED LABEL */}

        <label
          className="
            absolute
            top-6
            left-6
            bg-black
            text-white
            text-sm
            font-semibold
            px-3
            py-1
            rounded-lg
            z-10
            shadow-lg
          "
        >
          Promoted
        </label>

        <RestaurantCard {...props} />

      </div>
    );
  };
};

export default RestaurantCard;