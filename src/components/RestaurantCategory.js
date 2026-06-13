//import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  //const [showItems, setShowItems] = useState(true);

 const handleClick = () => {
  //  setShowItems(!showItems);
  setShowIndex();
  };

  return (
    <div className="px-4 md:px-0">
      {/* Header */}
      <div className="w-full md:w-8/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-xl p-4 cursor-pointer">
        
        <div className="flex justify-between items-center" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>

        {/* Items */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;