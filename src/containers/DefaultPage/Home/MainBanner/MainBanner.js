import { useContext, useState } from "react";
import "../MainBanner/MainBanner.scss";
import Carousel from "react-elastic-carousel";
import { DataContext } from "../../../../context/dataContext";
import { useNavigate } from "react-router-dom";

const MainBanner = () => {
  const { productData } = useContext(DataContext);
  const { filterProductData, setFilterProductData } = useContext(DataContext);
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
    <div className="main-banner container p-0">
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
              <i class={item.icon}></i>
              <p className="mb-0">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="main-banner-content">
        <div className="banner-left">
          <Carousel
            itemsToShow={1}
            showArrows={false}
            // enableAutoPlay={true}
            // enableSwipe={true}
            // autoPlaySpeed={5000}
          >
            <div className="item-banner">
              <div className="img-banner">
                <img src="/images/Page Home/Main Banner/img-01.webp" alt="" />
              </div>
              <div className="content">
                <p className="category mb-0">BEST SELLING</p>
                <p className="subject mb-1">Baby Clothes</p>
                <p className="cc mb-0">Start Shopping Right Now</p>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                  {/* <i class="fa-light fa-arrow-right-long"></i> */}
                </div>
              </div>
            </div>
            <div className="item-banner  ">
              <div className="img-banner">
                <img src="/images/Page Home/Main Banner/img-04.jpg" alt="" />
              </div>
              <div className="content-02">
                <p className="category mb-0">UP TO 40%</p>
                <p className="subject mb-1">Summer Sales</p>
                <p className="cc mb-0">Start Shopping Right Now</p>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                  {/* <i class="fa-light fa-arrow-right-long"></i> */}
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="banner-right">
          <div className="item-banner">
            <div className="img-banner">
              <img src="/images/Page Home/Main Banner/img-02.jpg" alt="" />
            </div>
            <div className="content">
              <p className="category mb-0">NEW IN</p>
              <p className="subject mb-0">Kids Store</p>
              <div className="btn-shop-now">
                <p className="mb-0">SHOP NOW</p>
                <i class="fa-light fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <div className="item-banner">
            <div className="img-banner">
              <img src="/images/Page Home/Main Banner/img-03.jpg" alt="" />
            </div>
            <div className="content">
              <p className="category mb-0">POPULAR</p>
              <p className="subject mb-0">Hot Seller</p>
              <div className="btn-shop-now">
                <p className="mb-0">SHOP NOW</p>
                <i class="fa-light fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
