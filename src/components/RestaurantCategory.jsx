
import MenuItems from "./MenuItems";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false);
    const toggleItems = () => setShowIndex();

    return (
        <div className="ease-in-out transition-[max-height] duration-500">
            {/* Render restaurant categories */}
            <div>
                <div className="flex justify-between my-4 p-4 mx-auto bg-gray-50 shadow-md rounded cursor-pointer" onClick={toggleItems}>
                    <span className="menu-item-section font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="menu-item-section text-xl">{ showItems ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>}</span>
                </div>
              { showItems && <div className="animate-fade"><MenuItems menuItems={data.itemCards}/></div> }
            </div>
        </div>
    )
}

export default RestaurantCategory;