import "../ItemBanner01/ItemBanner01.scss";

const ItemBanner01 = () => {
  return (
    <div className="item-banner item-banner-01">
      <img src="/images/TopBanner/banner-01.jpg" alt="" />
      <div className="container">
        <div className="content ">
          <div className="category-type mb-4">
            <p className="buy mb-0">Buy 2 get</p>
            <div className="free-box">
              <i class="fa-regular fa-star"></i>
              <p className="mb-0">1 Free</p>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          <p className="subject mb-3">
            <span className="fw-8">Fashionable</span> 
            <span className="collection">Collection</span>
          </p>
          <p className="event">FREE SHIPPING & 60-DAY FREE RETURNS</p>
          <div className="btn-shop-now">
            <p className="mb-0 mr-3">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="blur"></div>
    </div>
  );
};

export default ItemBanner01;
