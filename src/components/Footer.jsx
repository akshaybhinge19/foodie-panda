const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer-container flex justify-evenly">
        <p style={{fontStyle: 'italic'}}>© 2024 All rights reserved.</p>
        {/* <address>
          <p>123 Main St, City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurantfinder.com</p>
        </address> */}
        <ul className="terms-container flex m-0 flex-col gap-1">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
        <ul>
          <li className="hover:cursor-pointer scale-[1.01] underline ease-in-out duration-200 transition-all">Facebook</li>
          <li className="hover:cursor-pointer scale-[1.01] underline ease-in-out duration-200 transition-all">Instagram</li>
          <li className="hover:cursor-pointer scale-[1.01] underline ease-in-out duration-200 transition-all">Twitter</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
