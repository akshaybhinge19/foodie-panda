import { FaStar } from "react-icons/fa6";
// import * as foodLogo from "../../assets/food1.avif";
import { CDN_PATH } from "../utils/constants";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const RestaurantCard = (props) => {
  const { hotel } = props;
  // console.log(hotel)

  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    costForTwo,
    cuisines,
    locality,
    aggregatedDiscountInfoV3
  } = hotel.info;
  return (
    <Link to={"/restaurants/" + hotel.info.id} className="resto-card w-[23%] aspect-[1/1] bg-slate-100
    text-black mx-[1%] my-[1%] hover:scale-[1.02] hover:shadow-green-600 hover:shadow-[0_0_0_3px_rgba(0,0,0,0.3)] ease-in-out duration-300 transition-all rounded-2xl">
      <div className="resto-image-container relative w-[100%] h-[65%]">
        <img src={`${CDN_PATH}${cloudinaryImageId}`} alt={name} className={`resto-image p-[0.1px] w-[calc(100%-0.2px)] h-[100%] object-cover rounded-2xl`}/>
        {aggregatedDiscountInfoV3 && 
        <div className="p-[0.1px] w-[calc(100%-0.2px)] h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent overflow-clip">
          <span className="uppercase text-white absolute bottom-0 left-0 font-sans p-2 text-ellipsis whitespace-nowrap overflow-hidden text-xl font-extrabold"> 
            {aggregatedDiscountInfoV3.header + " " + aggregatedDiscountInfoV3.subHeader}
          </span>
        </div>
        }
      </div>
      <div className="resto-info px-4 min-h-fit">
        <h2 className="text-ellipsis whitespace-nowrap overflow-hidden font-bold">{name}</h2>
        <p className="flex items-center font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          <span className="bg-green-700 inline-flex items-center rounded-full h-[100%] aspect-[1/1] text-center align-middle mr-1 p-1">
            <FaStar className="fill-white" size={12}/>
          </span>
          {avgRating} <BsDot /> <span>{sla?.slaString}</span>
        </p>
        <p>{costForTwo}</p>
        <p className="text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
          Cuisine:{" "}
          {Array.isArray(cuisines)
            ? cuisines.toString()
            : cuisines}
        </p>
        {/* <p className="text-gray-600">{locality}</p> */}
        {/* <button type="button">Order Now</button> */}
      </div>
    </Link>
  );
};

export default RestaurantCard;
