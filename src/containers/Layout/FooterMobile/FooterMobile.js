import { Link } from "react-router-dom";
import "../FooterMobile/FooterMobile.scss";
import { CATEGORIES_PAGE, HOME_PAGE, MY_ACCOUNT_PAGE } from "../../../settings/constant";

const FooterMobile = () => {
  return (
    <div className="footer-mobile">
      <div className="menu-mobile container">
        <Link to={HOME_PAGE}>
          <div className="item-navigate">
            <i class="fa-light fa-house-blank"></i>
            <p className="mb-0">HOME</p>
          </div>
        </Link>
        <Link to={CATEGORIES_PAGE}>
          <div className="item-navigate">
            <i class="fa-light fa-sliders-up"></i>
            <p className="mb-0">CATEGORIES</p>
          </div>
        </Link>
        <Link to={MY_ACCOUNT_PAGE}>
          <div className="item-navigate">
            <i class="fa-light fa-user"></i>
            <p className="mb-0">ACCOUNT</p>
          </div>
        </Link>
        <div className="item-navigate">
          <i class="fa-light fa-magnifying-glass"></i>
          <p className="mb-0">SEARCH</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
