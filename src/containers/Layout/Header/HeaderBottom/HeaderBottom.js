import { useContext } from "react";
import "../HeaderBottom/HeaderBottom.scss";
import Menu from "../MenuNavigate/Menu/Menu";
import { DataContext } from "../../../../context/dataContext";

const HeaderBottom = () => {
  const { openMenuPopup, setOpenMenuPopup } = useContext(DataContext);

  return (
    <div className="header-bottom">
      <div className="menu-tab-left">
        <div
          className="browse-categories"
          onClick={() => {
            setOpenMenuPopup(true);
          }}
        >
          <div className="subject">
            <i class="fa-solid fa-bars-sort mr-2"></i>
            <p className="mb-0">Categories</p>
          </div>
        </div>
        <Menu />
      </div>

      <div className="deal-menu">
        <p className="item-deal mb-0 mr-4">Limited Time Offer</p>
        <p className="item-deal mb-0">Buy Now!</p>
      </div>
    </div>
  );
};

export default HeaderBottom;
