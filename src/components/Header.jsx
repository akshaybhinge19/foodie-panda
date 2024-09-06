import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const currentPath = useLocation();
  function handleNavigation(path) {
    // console.log('current path',currentPath);
    if(currentPath.pathname === "/") navigate(0)
    else navigate(path);
  }
  // Subscribing to the store using a selector
  const cartItems  = useSelector((store)=> store.cart.items);
  console.log("header cart", cartItems);

  return (
    <header className="flex justify-between items-center px-20 mb-2 bg-green-200 shadow-lg h-16">
      <img
        src={require("../../assets/logo.jpg")}
        alt="logo"
        className="nav-logo w-[4%] rounded-full hover:scale-105 hover:cursor-pointer"
        onClick={()=>handleNavigation("/")}
      />
      <h1 className="title text-3xl antialiased font-serif">Foodie Panda</h1>
      <nav>
        <ul className="flex gap-5 p-4">
          <li className="text-gray-800 transition-all ease-in-out delay-100 hover:scale-110 hover:text-black duration-200">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="text-gray-800 transition-all ease-in-out delay-100 hover:scale-110 hover:text-black duration-200">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="text-gray-800 transition-all ease-in-out delay-100 hover:scale-110 hover:text-black duration-200">
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className="text-gray-800 transition-all ease-in-out delay-100 hover:scale-110 hover:text-black duration-200 cursor-pointer">
            <Link to={'/cart'}>🛒 ({ cartItems.length })</Link>
          </li>
          {/* <li onClick={()=> document.documentElement.scrollTop = document.documentElement.scrollHeight}>Contact</li> */}
          <li className="text-gray-800 transition-all ease-in-out delay-100 hover:scale-110 hover:text-black duration-200">
            <Link to={'/contact-us'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
