import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(
                    `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}`
                );

                const json = await data.json();
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        if (resId) {
            fetchData();
        }
    }, [resId]);

    return resInfo;
};

export default useRestaurantMenu;