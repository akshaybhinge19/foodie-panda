import RestaurantCard from "./RestaurantCard";


const RestaurantContainer = ({restaurantList}) => {
  return (
    <div className="restaurant-container flex mx-[5%] justify-center flex-grow">
      <div className="flex flex-wrap justify-start w-[85%]">
        {restaurantList.map((hotel,i) => {
          return <RestaurantCard key={hotel.info.name + hotel.info.id + i} hotel={hotel} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
