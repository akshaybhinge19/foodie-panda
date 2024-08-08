import RestaurantContainer from "./RestaurantContainer";
import restaurantData from "../data/restaurants.json";
import { useState } from "react";
import { TiInputChecked } from "react-icons/ti";

import Shimmer from './Shimmer';


const Body = () => {
  const [restaurantList, setListOfRestaurants] = useState([...restaurantData]);
  const [checked, setChecked] = useState(false);
  const [inputSearch, setInputSearchValue] = useState("");
  
  // todo along with online api inside useEffect Hook


  // conditional rendering
  if(restaurantData.length <= 0) {
    return <Shimmer/>
  }
  return (
    <div className="body-container">
      <div className="actions-container">
        <input value={inputSearch} type="text" placeholder="Search for restaurants..." onChange={(e)=>setInputSearchValue(e.target.value.toLowerCase())} />
        
        <button type="button"
          onClick={()=> {
            const localRest = checked ? restaurantData.filter(restaurant=> restaurant.rating >= 4) : restaurantData;
            const filteredList = localRest.filter(restaurant=> restaurant.name.toLowerCase().includes(inputSearch));
            setListOfRestaurants(filteredList);
            console.log('search button clicked!' , inputSearch);
          }}> 
          Search
        </button>

        <button className="clear-serach" onClick={()=>{
          setInputSearchValue('');
          setListOfRestaurants([...restaurantData]);
          setChecked(false)
          console.log('clear search!');
        }}>Clear Filters</button>
        
        <button type="button" className={checked ? "filter-btn checked" : "filter-btn"}
          onClick={()=> {
            const filteredList = checked ? restaurantData : restaurantData.filter(restaurant=> restaurant.rating >= 4);
            setListOfRestaurants(filteredList);
            setChecked(!checked);
            console.log('button clicked!');
          }}> 
          Top Rated Restaurants <TiInputChecked size={16} className={checked ? "checked" : "unchecked"}/> 
        </button>

      </div>
      <RestaurantContainer restaurantList={restaurantList}/>
    </div>
  );
};

export default Body;