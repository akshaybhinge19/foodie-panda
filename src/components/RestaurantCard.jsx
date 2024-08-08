import { FaStar } from "react-icons/fa6";
// import * as foodLogo from "../../assets/food1.avif";
import { CDN_PATH } from "../utils/constants";

const RestaurantCard = (props) => {
  const { hotel } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    costForTwo,
    cuisines,
  } = hotel.info;
  return (
    <div className="resto-card">
      <div className="resto-image-container">
        {/* <img src={foodLogo} alt={name} className="resto-image" />  */}
        <img src={`${CDN_PATH}${cloudinaryImageId}`} alt={name} className="resto-image" />
      </div>
      {/* <img src={require(hotel.logo)} alt={name} className='resto-image'/> */}
      <div className="resto-info">
        <h2>{name}</h2>
        <p style={{ display: "flex", alignItems: "center" }}>
          <FaStar />
          {`${avgRating} .`}  <span>{sla?.slaString || "Not reachable"}</span>
        </p>
        <p>{costForTwo}</p>
        <p>
          Cuisine:{" "}
          {Array.isArray(cuisines)
            ? cuisines.toString()
            : cuisines}
        </p>
        {/* <button type="button">Order Now</button> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
