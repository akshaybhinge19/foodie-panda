import { FaStar } from "react-icons/fa6";
import { CDN_MENU_IMG_PATH, CDN_PATH } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { PiLineSegmentFill } from "react-icons/pi";

const RestaurantMenu = () => {
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
        <div className="relative flex z-20 justify-center bg-gradient-to-t from-gray-300 to-transparent p-4 rounded-3xl">
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
            <div key={cardData.card.card.title + i}>
              <h3 className="menu-item-section">{cardData.card.card.title}</h3>
              <ul className="menu-item-container w-[95%] m-0 p-4 flex flex-col gap-0 list-none list-image-none">
                {cardData.card.card.itemCards.map((itemCard, i) => {
                  return (
                    <div key={itemCard.card.info.id + i}>
                      <li
                        key={itemCard.card.info.id + i}
                        className="menu-item-box flex justify-between mb-6"
                      >
                        <div className="resto-menu-description w-[80%]">
                          <div className="bold-text dark-gray-text text-bold text-gray-600">
                            {itemCard.card.info.name}
                          </div>
                          <div className="bold-text text-bold">
                            ₹{" "}
                            {itemCard.card.info.defaultPrice / 100 ||
                              itemCard.card.info.price / 100}
                          </div>
                          <div>
                            {itemCard.card.info.ratings.aggregatedRating
                              .rating && (
                              <span>
                                {" "}
                                <FaStar />
                                {
                                  itemCard.card.info.ratings.aggregatedRating
                                    .rating
                                }
                                (
                                {
                                  itemCard.card.info.ratings.aggregatedRating
                                    .ratingCountV2
                                }
                                )
                              </span>
                            )}
                          </div>
                          <p className="menu-info-para smoothed text-[#02060c99] whitespace-wrap w-[80%] font-semibold antialiased">
                            {itemCard.card.info.description}
                          </p>
                        </div>
                        <div className="resto-menu-actions relative w-[20%] flex justify-center">
                          <div className="menu-image-conatiner h-[100%] rounded-md aspect-[1/1]">
                            {
                              itemCard?.card?.info?.imageId && 
                              <img
                              className="rounded-2xl w-[100%] aspect-[1/1] object-cover"
                              src={`${CDN_MENU_IMG_PATH}${itemCard.card.info.imageId}`}
                              alt={itemCard.card.info.name}
                              />                            
                            }                            
                          </div>
                          <button type="button" 
                            className="menu-add-to-cart w-[70%] absolute -bottom-2.5 
                            text-green-700 font-bold bg-white py-1.5 px-2.5 rounded-lg
                            hover:bg-gray-300 border-2 border-green-800
                            ">
                            ADD
                          </button>
                        </div>
                      </li>
                      <hr className="mb-2" />
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
