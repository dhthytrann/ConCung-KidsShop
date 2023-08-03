import "../ItemBanner02/ItemBanner02.scss";

const ItemBanner02 = () => {
  return (
    <div className="item-banner item-banner-02">
      <img src="/images/TopBanner/banner-02.jpg" alt="" />
      <div className="container">
        <div className="content">
          <p className="categories mb-3">COMING SOON</p>
          <p className="subject mb-2">
            <span className="custom-subject mb-2">Riode Birthday</span>
            <span>Sale</span>
          </p>
          <p className="event mb-0">From 9th January from 19th February 2023</p>
          <div className="btn-shop-now">
            <p className="mb-0 mr-3">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* <div className="blur"></div> */}
    </div>
  );
};

export default ItemBanner02;
