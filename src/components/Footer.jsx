const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer-container">
        <p style={{fontStyle: 'italic'}}>© 2024 All rights reserved.</p>
        <address>
          <p>123 Main St, City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurantfinder.com</p>
        </address>
        <ul className="terms-container">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
