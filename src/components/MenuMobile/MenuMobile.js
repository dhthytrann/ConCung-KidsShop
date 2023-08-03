import { useContext, useState } from "react";
import "../MenuMobile/MenuMobile.scss";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

const MenuMobile = () => {
  const { productData } = useContext(DataContext);
  const { filterProductData, setFilterProductData } = useContext(DataContext);
  const { openMenuPopup, setOpenMenuPopup } = useContext(DataContext);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "Pictorial Book",
      icon: "fa-thin fa-book-open-reader",
      link: "/categories/Pictorial Book/0/400",
    },
    {
      id: 1,
      name: "Milk For Baby",
      icon: "fa-thin fa-jug-detergent",
      link: "/categories/Milk For Baby/0/400",
    },
    {
      id: 2,
      name: "Gifts & Others",
      icon: "fa-thin fa-gifts",
      link: "/categories/Gifts & Others/0/400",
    },
    {
      id: 3,
      name: "Mother & Daughter",
      icon: "fa-thin fa-vest-patches",
      link: "/categories/Mother & Daughter/0/400",
    },
    {
      id: 4,
      name: "Baby Toys",
      icon: "fa-thin fa-balloons",
      link: "/categories/Baby Toys/0/400",
    },
    {
      id: 5,
      name: "Apparels For Baby",
      icon: "fa-thin fa-shirt-tank-top",
      link: "/categories/Apparels For Baby/0/400",
    },
    {
      id: 6,
      name: "Candy Cake",
      icon: "fa-thin fa-cookie-bite",
      link: "/categories/Candy Cake/0/400",
    },
    {
      id: 7,
      name: "Secures & Health",
      icon: "fa-thin fa-heart-pulse",
      link: "/categories/Secures & Health/0/400",
    },
    {
      id: 8,
      name: "Baby Carriage",
      icon: "fa-thin fa-baby-carriage",
      link: "/categories/Baby Carriage/0/400",
    },
    {
      id: 8,
      name: "Best Sellers",
      icon: "fa-thin fa-badge-dollar",
      link: "/categories/Best Sellers/0/400",
    },
    {
      id: 9,
      name: "Flash Deal",
      icon: "fa-thin fa-tag",
      link: "/categories/Flash Deal/0/400",
    },
  ]);

  const handleClickItemCategory = (category, link) => {
    const filterProduct = productData.filter((val) =>
      val.category.includes(category)
    );
    setFilterProductData(filterProduct);
    navigate(link);
  };

  return (
    <div
      className={openMenuPopup ? "menu-mobile-popup open" : "menu-mobile-popup"}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenMenuPopup(false);
        }}
      >
        <div
          className={
            openMenuPopup ? "menu-mobile-box" : "menu-mobile-box animate"
          }
        >
          <p className="title mb-2">Browse Categories</p>
          <div className="menu-categories">
            {categories.map((item) => {
              return (
                <div
                  className="item-category"
                  key={item.id}
                  onClick={() => {
                    handleClickItemCategory(item.name, item.link);
                  }}
                >
                  <div className="item-content">
                    <i class={item.icon}></i>
                    <p className="mb-0">{item.name.toLocaleUpperCase()}</p>
                  </div>
                  <i class="item-icon fa-regular fa-chevron-right mr-1"></i>
                </div>
              );
            })}
          </div>
        </div>
      </OutsideClickHandler>

      <div
        className="close-popup"
        onClick={() => {
          setOpenMenuPopup(false);
        }}
      >
        <i class="fa-regular fa-xmark"></i>
      </div>
    </div>
  );
};

export default MenuMobile;
