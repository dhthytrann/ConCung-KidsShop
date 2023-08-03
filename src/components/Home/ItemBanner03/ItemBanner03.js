import "../ItemBanner03/ItemBanner03.scss";
import videoBg from "../../../assets/videos/video.mp4";

const ItemBanner03 = () => {
  return (
    <div className="item-banner item-banner-03">
      <video src={videoBg} loop autoplay="" muted />
      <div className="blur"></div>
      {/* <img src="/images/TopBanner/banner-03.jpg" alt="" /> */}
      <div className="container">
        <div className="content">
          <p className="categories mb-1">CHECK OUT OUR</p>
          <p className="subject mb-2">SUMMER SEASON'S</p>
          <p className="event mb-4">
            Up to 50% Off this Season’s & Get free shipping on all orders over $199.00
          </p>
          <div className="btn-shop-now">
            <p className="mb-0 mr-3">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBanner03;
