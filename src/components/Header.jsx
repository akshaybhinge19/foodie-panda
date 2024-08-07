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
          <li>Home</li>
          <li>About</li>
          <li>🛒</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
