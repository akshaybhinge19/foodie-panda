import { useSelector } from "react-redux";
import MenuItems from "../components/MenuItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="m-4 relative w-[100%] mt-8 p-4 font-sans min-h-max">
            <div className="w-6/12 m-auto">
                {cartItems.length > 0 && <button className="m-2 p-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>}
                <MenuItems menuItems={cartItems} />
                {cartItems.length === 0 && <div> Cart is empty! please add some items to the cart</div>}
                {cartItems.length > 0 && <button className="m-2 p-2 text-white bg-blue-300 rounded-lg">Checkout</button>}
            </div>
            
        </div>
    )
}


export default Cart;