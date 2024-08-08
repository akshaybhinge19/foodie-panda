import { FaStar } from "react-icons/fa6";
import * as foodLogo from "../../assets/food1.avif";

const RestaurantCard = (props) => {
  const { hotel } = props;
  return (
    <div className="resto-card">
      <div className="resto-image-container">
        <img src={foodLogo} alt={hotel.name} className="resto-image" /> 
      </div>
      {/* <img src={require(hotel.logo)} alt={hotel.name} className='resto-image'/> */}
      <div className="resto-info">
        <h2>{hotel.name}</h2>
        <p style={{ display: "flex", alignItems: "center" }}>
          <FaStar />
          {hotel.rating} . <span>{hotel.deliveryTime}</span>
        </p>
        <p>₹{hotel.costForTwo} FOR TWO</p>
        <p>
          Cuisine:{" "}
          {Array.isArray(hotel.cuisine)
            ? hotel.cuisine.toString()
            : hotel.cuisine}
        </p>
        {/* <button type="button">Order Now</button> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
