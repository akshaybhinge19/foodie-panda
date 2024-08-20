import { FaStar } from "react-icons/fa6";
import { CDN_MENU_IMG_PATH, CDN_PATH } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { PiLineSegmentFill } from "react-icons/pi";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const resId = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cardData) => {
        return cardData?.card?.card?.itemCards?.length > 0;
      }
    );

  const {
    name,
    avgRating,
    areaName,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    veg,
    sla,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurant-menu-wrapper-container flex mt-8 justify-center mx-[20%]">
      <div className="restaurant-menu-container relative w-[100%] mt-8 p-4 font-sans min-h-max">
        <h2 className="title-class-font font-bold text-2xl">{name}</h2>
        <div className="relative flex z-20 mb-8 justify-center bg-gradient-to-t from-gray-300 to-transparent p-4 rounded-3xl">
          <div className="resto-details z-50 bg-white flex flex-col p-4 w-[100%] rounded-[2rem] border-[1px] border-solid border-gray-300">
            <div className="rating-container font-bold flex items-center text-base">
              <span className="bg-green-700 inline-flex items-center rounded-full h-[80%] aspect-[1/1] text-center align-middle mr-1 p-1">
                <FaStar className="fill-white text-xs"/>
              </span>
              <span>{avgRating}</span>({totalRatingsString})
              <LuDot className="text-2xl p-0 m-0 text-gray-500"/>
              <span>{costForTwoMessage}</span>
            </div>
            <p className="orange-text text-orange-400 font-bold text-sm">
              {Array.isArray(cuisines) ? cuisines.toString() : cuisines}
            </p>
            <div className="area-container inline-flex relative my-2 mx-0">
              <div className="inline-block mr-0 pr-0">
                <PiLineSegmentFill className="absolute top-2 -left-3 m-0 text-4xl -rotate-45 pr-0 text-gray-400"/>
              </div>
              <div className="outlet-info outlet-start relative left-4">
                <div className="mb-1">
                  <span className="font-semibold text-sm mr-2">Outlet</span>
                  <span className="text-gray-600 text-sm">{areaName}</span>
                </div>
                <div className="text-sm lowercase font-sans font-semibold">
                  {sla.slaString}
                </div>
              </div>
              {/* <div className="outlet-info outlet-start">
                <span className="font-bold">Outlet</span>{" "}
                <span className="text-gray-600">{areaName}</span>
                {sla.slaString}
              </div> */}
              {/* <div className="outlet-info outlet-end bold-text">
                {sla.slaString}
              </div> */}
            </div>
            {/* {veg && <p>Veg</p>} */}
            {/* not a best practice */}
            <p
              dangerouslySetInnerHTML={{
                __html: expectationNotifiers?.[0]?.text || "",
              }}
              className="gray-text border-t-2"
            ></p>
            {/* <img src={`${CDN_PATH}${cloudinaryImageId}`} alt={name} className="resto-image-menu" /> */}
          </div>
        </div>
        
        {menuItems.map((cardData, i) => {
          return (
            <RestaurantCategory 
              key={cardData.card.card.title} 
              data={cardData.card.card}
              showItems={showIndex === i && true}
              setShowIndex={()=>{
                  if(showIndex === i) setShowIndex(-1)
                  else setShowIndex(i)
                }
              }
              />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
