import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { CDN_MENU_IMG_PATH, CDN_PATH, RESTO_MENU_PATH } from "../utils/constants"
import Shimmer from "../components/Shimmer";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const resId = useParams();
    console.log("resid", resId)

    useEffect(()=> {
        // fetch restaurant menu data from API and update menu items list
        fetchData();
    },[]);
    const fetchData = async () => {
        // const RESTO_MENU_PATH = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId.id}`;
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RESTO_MENU_PATH + resId.id)}`);
        let response = await data.json();
        response = JSON.parse(response.contents);
        const menuItemsResponse = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cardData => {
            // console.log(cardData.card.card)
            return cardData?.card?.card?.itemCards?.length > 0
        });
        const restaurantDetailsResponse = response?.data?.cards[2]?.card?.card?.info || [];
        setMenuItems(menuItemsResponse);
        setRestaurantDetails(restaurantDetailsResponse);
        console.log('Menu fetched successfully!', menuItemsResponse, restaurantDetailsResponse);
    }
    if(!restaurantDetails) {
        return <Shimmer/>;
    }

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
        expectationNotifiers
    } = restaurantDetails;

    return (
        <div className="restaurant-menu-wrapper-container">
            <div className="restaurant-menu-container">
                <h2 className="title-class-font">{name}</h2>
                <div className="resto-details">
                    <div className="rating-container bold-text">
                        <FaStar />
                        <span>{avgRating}</span>
                        ({totalRatingsString}) 
                        <LuDot/>
                        <span>{costForTwoMessage}</span>
                    </div>
                    <p className="orange-text">{Array.isArray(cuisines) ? cuisines.toString() : cuisines}</p>
                    <div className="area-container">                
                        <div className="outlet-info outlet-start"><span className="bold-text">Outlet</span> <span className="gray-text">{areaName}</span></div>
                        <div className="outlet-info outlet-end bold-text">{sla.slaString}</div>
                    </div>
                    {/* {veg && <p>Veg</p>} */}              
                    <p dangerouslySetInnerHTML={{__html: expectationNotifiers?.[0]?.text || ""}} className="gray-text"></p>
                    {/* <img src={`${CDN_PATH}${cloudinaryImageId}`} alt={name} className="resto-image-menu" /> */}
                </div>
                {
                menuItems.map((cardData,i)=> {
                    return <div key={cardData.card.card.title+i}>
                        <h3 className="menu-item-section">{cardData.card.card.title}</h3>
                        <ul className="menu-item-container">
                            {
                                cardData.card.card.itemCards.map((itemCard, i) => {
                                    return (
                                        <div>
                                            <li key={itemCard.card.info.id + i} className="menu-item-box">
                                                <div className="resto-menu-description">
                                                    <div className="bold-text dark-gray-text">{itemCard.card.info.name}</div> 
                                                    <div className="bold-text">₹ {itemCard.card.info.defaultPrice / 100 || itemCard.card.info.price/100}</div> 
                                                    <div>
                                                        {itemCard.card.info.ratings.aggregatedRating.rating && <span> <FaStar />                                              
                                                            {itemCard.card.info.ratings.aggregatedRating.rating}({itemCard.card.info.ratings.aggregatedRating.ratingCountV2})
                                                        </span>}
                                                    </div>
                                                    <p className="menu-info-para smoothed">{itemCard.card.info.description}</p>
                                                </div>
                                                <div className="resto-menu-actions">
                                                    <div className="menu-image-conatiner">
                                                        <img src={`${CDN_MENU_IMG_PATH}${itemCard.card.info.imageId}`} alt={itemCard.card.info.name} />
                                                    </div>
                                                    <button type="button" className="menu-add-to-cart"> ADD</button>

                                                </div>
                                            </li>
                                            <hr/>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                })
                }            
            </div>            
        </div>
    )
}

export default RestaurantMenu;