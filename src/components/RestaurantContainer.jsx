import RestaurantCard from "./RestaurantCard";
import restaurantData from "../data/restaurants.json";

const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
      {restaurantData.map((hotel, i) => {
        return <RestaurantCard key={hotel.name + i} hotel={hotel} />;
      })}
    </div>
  );
};

export default RestaurantContainer;
