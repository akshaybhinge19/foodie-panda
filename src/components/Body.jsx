import RestaurantContainer from "./RestaurantContainer";
// import restaurantData from "../data/restaurants.json";
import { RESTO_PATH } from "../utils/constants";
import { useEffect, useState } from "react";
import { TiInputChecked } from "react-icons/ti";

import Shimmer from './Shimmer';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([...restaurantList]);
  const [checked, setChecked] = useState(false);
  const [inputSearch, setInputSearchValue] = useState("");
  
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
    let restaurantListToappend = [...response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants, ...response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants];
    restaurantListToappend = restaurantListToappend.filter((restaurant,i) => restaurantListToappend.findIndex((rest)=> rest.info.id === restaurant.info.id) === i)
    setRestaurantList(restaurantListToappend);
    setFilteredRestaurantList(restaurantListToappend);
  }

  // conditional rendering
  if(restaurantList.length <= 0) {
    return <Shimmer/>
  }
  return (
    <div className="body-container">
      <div className="actions-container">
        <input value={inputSearch} type="text" placeholder="Search for restaurants..." onChange={(e)=>setInputSearchValue(e.target.value.toLowerCase())} />
        
        <button type="button"
          onClick={()=> {
            const localRest = checked ? restaurantList.filter(restaurant=> restaurant.info.avgRating >= 4) : restaurantList;
            const filteredList = localRest.filter(restaurant=> restaurant.info.name.toLowerCase().includes(inputSearch));
            setFilteredRestaurantList(filteredList);
            console.log('search button clicked!' , inputSearch);
          }}> 
          Search
        </button>

        <button className="clear-serach" onClick={()=>{
          setInputSearchValue('');
          setFilteredRestaurantList([...restaurantList]);
          setChecked(false)
          console.log('clear search!');
        }}>Clear Filters</button>
        
        <button type="button" className={checked ? "filter-btn checked" : "filter-btn"}
          onClick={()=> {
            const filteredList = checked ? restaurantList : restaurantList.filter(restaurant=> restaurant.info.avgRating >= 4);
            setFilteredRestaurantList(filteredList);
            setChecked(!checked);
            console.log('button clicked!');
          }}> 
          Top Rated Restaurants <TiInputChecked size={16} className={checked ? "checked" : "unchecked"}/> 
        </button>

      </div>
      <RestaurantContainer restaurantList={filteredRestaurantList}/>
    </div>
  );
};

export default Body;