import RestaurantContainer from "./RestaurantContainer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTO_PATH } from "../utils/constants";
import { useEffect, useState } from "react";
import { TiInputChecked } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

import Shimmer from './Shimmer';
// import ScrollCarousel from './CarouselShimmer';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([...restaurantList]);
  const [checked, setChecked] = useState(false);
  const [inputSearch, setInputSearchValue] = useState("");
  const isOnline = useOnlineStatus();
  const btnClass = "rounded-lg px-2 mx-2 bg-blue-300 hover:bg-blue-400 my-1 ease-in-out duration-200 transition-all";
  
  // todo along with online api inside useEffect Hook
  useEffect(() => {
    // fetch data from API and update restaurantList
    fetchData();
  }, []);

  const fetchData = async () => {
    //FETCH DIRECTLY FOR LOCAL TESTING
    // const data = await fetch(RESTO_PATH);
    // to biapass cors error while fetch using CORS proxy
    const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RESTO_PATH)}`);
    let response = await data.json();
    response = JSON.parse(response.contents);
    let restaurantListToappend = [...(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []), ...(response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])];
    restaurantListToappend = restaurantListToappend.filter((restaurant,i) => restaurantListToappend.findIndex((rest)=> rest.info.id === restaurant.info.id) === i)
    setRestaurantList(restaurantListToappend);
    setFilteredRestaurantList(restaurantListToappend);
  }

  if(isOnline === false) {
    return <h1>No internet connection. Please check your connection and try again.</h1>
  }

  // conditional rendering
  if(restaurantList.length <= 0) {
    return <Shimmer/>
  }
  return (
    <div className="body-container">
      <div className="actions-container ml-[12%] flex">
        <label className="relative block min-h-amx">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <IoIosSearch />
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block 
            bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for restaurants..." 
            type="text" 
            name="search"
            value={inputSearch}
            onChange={(e)=>setInputSearchValue(e.target.value.toLowerCase())}
            />
        </label>        
        <button type="button"
          className={btnClass}
          onClick={()=> {
            const localRest = checked ? restaurantList.filter(restaurant=> restaurant.info.avgRating >= 4) : restaurantList;
            const filteredList = localRest.filter(restaurant=> restaurant.info.name.toLowerCase().includes(inputSearch));
            setFilteredRestaurantList(filteredList);
            console.log('search button clicked!' , inputSearch);
          }}> 
          Search
        </button>

        <button className={"clear-serach " + btnClass}
         onClick={()=>{
          setInputSearchValue('');
          setFilteredRestaurantList([...restaurantList]);
          setChecked(false)
          console.log('clear search!');
        }}>Clear Filters</button>
        
        <button type="button" 
          className={ checked ? 
            `flex rounded-lg px-2 mx-2 hover:bg-green-500 my-1 ease-in-out 
            duration-200 transition-all filter-btn relative checked bg-green-400 pr-4` 
              : 
              `flex rounded-lg px-2 mx-2 bg-blue-300 hover:bg-blue-400 my-1 ease-in-out 
            duration-200 transition-all filter-btn relative unchecked` 
          }
          onClick={()=> {
            const filteredList = checked ? restaurantList : restaurantList.filter(restaurant=> restaurant.info.avgRating >= 4);
            setFilteredRestaurantList(filteredList);
            setChecked(!checked);
            console.log('button clicked!');
          }}> 
          <span>Top Rated Restaurants</span> <span className=""><TiInputChecked  className={checked ? "checked absolute bottom-[25%] visible" : "unchecked absolute invisible"}/> </span>
        </button>

      </div>
      <RestaurantContainer restaurantList={filteredRestaurantList}/>
    </div>
  );
};

export default Body;