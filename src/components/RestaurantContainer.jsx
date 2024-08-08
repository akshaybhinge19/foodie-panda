import RestaurantCard from "./RestaurantCard";


const RestaurantContainer = ({restaurantList}) => {
  return (
    <div className="restaurant-container">
      {restaurantList.map((hotel,i) => {
        return <RestaurantCard key={hotel.info.name + hotel.info.id + i} hotel={hotel} />;
      })}
    </div>
  );
};

export default RestaurantContainer;
