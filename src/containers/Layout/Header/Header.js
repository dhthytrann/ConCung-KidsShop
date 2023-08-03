import "../Header/Header.scss";
import Logo from "../../../components/UI/Logo/Logo";
import MenuNavigate from "./MenuNavigate/MenuNavigate";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../../settings/constant";
import SearchBar from "./MenuNavigate/SearchBar/SearchBar";
import HeaderTop from "./HeaderTop/HeaderTop";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import SearchBarMobile from "./SearchBarMobile/SearchBarMobile";

const Header = () => {
  const { openCart, setOpenCart } = useContext(DataContext);
  const { cartData } = useContext(DataContext);
  return (
    <div class="custom-header">
      <HeaderTop />
      <div className="slider-header container">
        <Logo imgLogo={"/images/logoSecond.png"} />
        {/* <MenuNavigate /> */}
        <SearchBar />
        <div className="user-menu menu-right">
          <div className="box">
            <div className="item-searchbar">
              <SearchBarMobile />
            </div>
          </div>
          <div className="box">
            <Link to={LOGIN_PAGE} replace={true}>
              <div className="item-user mr-3">
                <i class="fal fa-user"></i>
              </div>
            </Link>
            <div className="item-like mr-4">
              <i class="fal fa-heart"></i>
            </div>
          </div>
          <div className="box">
            <div className="division mr-3"></div>
            <div
              className="item-cart"
              onClick={() => {
                setOpenCart(true);
              }}
            >
              <div className="content mr-3">
                <p className="title mb-0">Shopping Cart:</p>
                <h5 className="mb-0 total">$0.00</h5>
              </div>
              <div className="btn-cart-dropdown">
                <i class="fal fa-shopping-bag"></i>
                <div className="badge">
                  <div className="badge-total">
                    <p className="mb-0">{cartData.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
