import Logo from "../../../components/UI/Logo/Logo";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <>
      <div class="footer-page container">
        <div class="footer-top">
          <div className="item-logo item-box">
            <Logo imgLogo={"/images/logoSecond.png"} />
            <p className="mb-4 mt-3">
              Fringilla urna porttitor rhoncus dolor purus luctus venenatis
              lectus magna fringilla diam maecenas ultricies mi eget mauris.
            </p>
            <p className="mb-0">Riode@example.com</p>
          </div>

          <div class="item-box">
            <h4 className="mb-4">About Us</h4>
            <ul className="content flex-column pl-0">
              <li className="mb-2">
                <p className="mb-0">About Us</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Order History</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Returns</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Custom Services</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Terms & Condition</p>
              </li>
            </ul>
          </div>
          <div class="item-box">
            <h4 className="mb-4">Customer Service</h4>
            <ul className="content flex-column pl-0">
              <li className="mb-2">
                <p className="mb-0">Payment Methods</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Money-back Guarantee!</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Shipping</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Custom Services</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Terms and Condition</p>
              </li>
            </ul>
          </div>
          <div class="item-box">
            <h4 className="mb-4">My Account</h4>
            <ul className="content flex-column pl-0">
              <li className="mb-2">
                <p className="mb-0">Sign In</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">View Cart</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">My Wishlist</p>
              </li>
              <li className="mb-2">
                <p className="mb-0">Track My Order</p>
              </li>
              <li className="">
                <p className="mb-0">Help</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom flex a-center j-between">
          <p className="mb-0">
            Copyright © 2021 Riode Store. All Rights Reserved.
          </p>
          <div class="pay">
            <img
              src="https://d-themes.com/wordpress/riode/sport/wp-content/uploads/sites/97/2021/01/payment-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
