import { useContext, useEffect, useState } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";
import Carousel from "react-elastic-carousel";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import AdvertisingShoses from "../../../components/Advertising/AdvertisingShoses/AdvertisingShoses";
import AdvertisingSummer from "../../../components/Advertising/AdvertisingSummer/AdvertisingSummer";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";
import AdvertisingCollection from "../../../components/Advertising/AdvertisingCollection/AdvertisingCollection";
import SubscribeBanner from "../../../components/Banner/SubscribeBanner/SubscribeBanner";
import MainBanner from "./MainBanner/MainBanner";
import ItemIntroduce from "../../../components/Home/ItemIntroduce/ItemIntroduce";
import ListProductByCategories from "../../../components/Product/ListProductByCategories/ListProductByCategories";
import ListProductAdvertisement from "../../../components/Product/ListProductAdvertisement/ListProductAdvertisement";
import LastestBlog from "../../../components/LastestBlog/LastestBlog";
import ItemInstagram from "../../../components/Home/ItemInstagram/ItemInstagram";

const Home = () => {
  const { filterProductData, setFilterProductData } = useContext(DataContext);

  const { productData } = useContext(DataContext);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const breakPointss = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  const breakPointsOurClient = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  });

  // const listProduct = JSON.parse(localStorage.getItem("productData"));
  // const [productData, setProductData] = useState(listProduct);

  const filterOurFeatured = productData.filter((val) =>
    val.category.includes("Our Featured")
  );
  const filterBestSellers = productData.filter((val) =>
    val.category.includes("Best Sellers")
  );
  const filterNewArrivals = productData.filter((val) =>
    val.category.includes("New Arrivals")
  );
  const filterShoses = productData.filter((val) =>
    val.category.includes("Shoses")
  );
  const filterClothing = productData.filter((val) =>
    val.category.includes("Clothing")
  );
  const filterBags = productData.filter((val) => val.category.includes("Bags"));
  const filterAccesories = productData.filter((val) =>
    val.category.includes("Accesories")
  );
  const filterLatestProduct = productData.filter((val) =>
    val.category.includes("Bags")
  );

  return (
    <div className="home-page container ">
      <MainBanner />
      <div className="list-introduce">
        <Carousel
          breakPoints={breakPointss}
          showArrows={false}
          pagination={false}
        >
          <ItemIntroduce
            icon={"fa-light fa-truck-fast"}
            bgIcon={"#74b9ff"}
            subject={"Free Shipping and Return"}
            description={"Free shipping on orders over $99.00"}
          />
          <ItemIntroduce
            icon={"fa-light fa-pan-food"}
            bgIcon={"#f78fb3"}
            subject={"High Quality Goods"}
            description={"Free shipping on orders over $99.00"}
          />
          <ItemIntroduce
            icon={"fa-light fa-cupcake"}
            bgIcon={"#f5cd79"}
            subject={"100% Secure Payment"}
            description={"Free shipping on orders over $99.00"}
          />
        </Carousel>
      </div>
      <div className="border-margin">
        <ListProductByCategories />
      </div>
      <div className="advertising">
        <AdvertisingSummer />
      </div>
      <div className="border-margin">
        <ListProductAdvertisement
          categoryName={"Children's Clothing"}
          imgBanner={"/images/Advertisement/img-01.jpg"}
          content={["NEW COLLECTION", "Popular Infants Goods"]}
        />
      </div>
      <div className="border-margin">
        <ListProductAdvertisement
          categoryName={"Toys Collection"}
          imgBanner={"/images/Advertisement/img-02.jpg"}
          content={["NEW COLLECTION", "Toys Of Children's Choice"]}
        />
      </div>
      <div className="border-margin">
        <ListProductAdvertisement
          categoryName={"Eat & Foods For Baby"}
          imgBanner={"/images/Advertisement/img-03.jpg"}
          content={["NEW COLLECTION", "Nutritious An Infant's Food"]}
        />
      </div>

      <div className="border-margin">
        <SubscribeBanner />
      </div>

      <div className="border-margin">
        <LastestBlog />
      </div>
      <div className="border-margin">
        <div className="tab-titles">
          <p className="title mb-0">Our Instagram</p>
          <div className="view-all">
            <p className="mb-0">View All</p>
            <i class="fa-light fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="list-instagram">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
            itemPadding={[0, 0]}
          >
            <ItemInstagram image={"/images/Instagram/img-01.webp"} />
            <ItemInstagram image={"/images/Instagram/img-02.webp"} />
            <ItemInstagram image={"/images/Instagram/img-03.webp"} />
            <ItemInstagram image={"/images/Instagram/img-04.webp"} />
            <ItemInstagram image={"/images/Instagram/img-05.webp"} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
