import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button type="button">Search</button>
      </div>
      <RestaurantContainer />
    </div>
  );
};

export default Body;