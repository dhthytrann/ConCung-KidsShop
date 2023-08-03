import { Link } from "react-router-dom";
import {
  CATEGORIES_PAGE,
  HOME_PAGE,
  MY_ACCOUNT_PAGE,
  PRODUCTS_PAGE,
} from "../../../../../settings/constant";
import "../Menu/Menu.scss";
import { useContext } from "react";
import { DataContext } from "../../../../../context/dataContext";

const Menu = () => {
  const { filterProductData, setFilterProductData } = useContext(DataContext);
  const { productData } = useContext(DataContext);

  return (
    <div className="menu">
      <ul className="mb-0 pl-0">
        <li className="item-navigate">
          <Link to={HOME_PAGE} replace={false}>
            <p className="mb-0">Home</p>
          </Link>
        </li>
        <li className="item-navigate item-menu-dropdown">
          <div
            className="title"
            onClick={() => {
              setFilterProductData(productData);
            }}
          >
            <Link to={"/categories/allProduct/0/400"} replace={false}>
              <p className="mb-0">Categories</p>
            </Link>
          </div>
        </li>
        <li className="item-navigate">
          <Link to={HOME_PAGE} replace={false}>
            <p className="mb-0">Blog</p>
          </Link>
        </li>
        <li className="item-navigate">
          <Link to={MY_ACCOUNT_PAGE} replace={false}>
            <p className="mb-0">Contact</p>
          </Link>
        </li>
        <li className="item-navigate">
          <Link to={MY_ACCOUNT_PAGE} replace={false}>
            <p className="mb-0">My Account</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
