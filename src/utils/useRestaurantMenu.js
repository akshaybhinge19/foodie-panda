import { useEffect, useState } from "react";
import { RESTO_MENU_PATH } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        // fetch restaurant menu data from API and update menu items list
        fetchData();
    },[])

    const fetchData= async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RESTO_MENU_PATH + resId.id)}`);
        // const data = await fetch(RESTO_MENU_PATH + resId.id);
        let response = await data.json();
        response = JSON.parse(response.contents);
        // console.log(response)
        setResInfo(response.data);
    }

    return resInfo;
}

export default useRestaurantMenu;