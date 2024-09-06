import { FaStar } from "react-icons/fa6";
import { CDN_MENU_IMG_PATH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ menuItems }) => {
  const dispatch  = useDispatch();

  const handleAddItems = (item) => {
    // dispatch an item to cart
    console.log("Add to cart clicked", item);
    dispatch(addItem(item));
  }

  return (
    <>
      <ul className="menu-item-container w-full m-0 p-4 flex flex-col gap-0 list-none list-image-none">
        {menuItems.map((itemCard, i) => {
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
                    ₹
                    {itemCard.card.info.defaultPrice / 100 ||
                      itemCard.card.info.price / 100}
                  </div>
                  <div className="relative">
                    {itemCard.card.info.ratings.aggregatedRating.rating && (
                      <span className="flex items-center">
                        <FaStar className="p-0 m-0"/>
                        {itemCard.card.info.ratings.aggregatedRating.rating}(
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
                    {itemCard?.card?.info?.imageId && (
                      <img
                        className="rounded-2xl w-[100%] aspect-[1/1] object-cover"
                        src={`${CDN_MENU_IMG_PATH}${itemCard.card.info.imageId}`}
                        alt={itemCard.card.info.name}
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    className="menu-add-to-cart w-[70%] absolute -bottom-2.5 
                            text-green-700 font-bold bg-white py-1.5 px-2.5 rounded-lg
                            hover:bg-gray-300 border-2 border-green-800
                            "
                    onClick={ () => handleAddItems(itemCard) }
                  >
                    ADD
                  </button>
                </div>
              </li>
              <hr className="mb-2" />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default MenuItems;
