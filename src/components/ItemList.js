import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => {
        const info = item?.card?.info;

        // Prevent crash if item structure is invalid
        if (!info) return null;

        const price =
          (info.price || info.defaultPrice || 0) / 100;

        return (
          <div
            key={info.id || index}
            className="p-4 border-b flex justify-between items-start gap-4"
          >
            {/* LEFT SIDE */}
            <div className="w-2/3 text-left">
              <h4 className="font-bold">{info.name}</h4>

              <p className="text-sm font-semibold">
                ₹{price}
              </p>

              <p className="text-xs mt-1 text-gray-600">
                {info.description}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/3 flex justify-end">
              <div className="relative">
                {info.imageId && (
                  <img
                    src={CDN_URL + info.imageId}
                    alt={info.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                )}

                <button
                  className="absolute left-1/2 -translate-x-1/2 bottom-2 px-4 py-1 bg-white border border-gray-300 shadow-md rounded text-green-600 text-sm font-bold whitespace-nowrap"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;