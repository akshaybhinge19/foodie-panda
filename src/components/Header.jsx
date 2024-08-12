import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        src={require("../../assets/logo.jpg")}
        alt="logo"
        className="nav-logo"
      />
      <h1 className="title">Foodie Panda</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>🛒</li>
          {/* <li onClick={()=> document.documentElement.scrollTop = document.documentElement.scrollHeight}>Contact</li> */}
          <li>
            <Link to={'/contact-us'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
