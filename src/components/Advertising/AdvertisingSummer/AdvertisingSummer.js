import "../AdvertisingSummer/AdvertisingSummer.scss";

const AdvertisingSummer = () => {
  return (
    <div className="advertising-summer">
      <div className="left banner-item ">
        <div className="img-bg">
          <img src="/images/advertising-summer/img-01.png" alt="" />
        </div>
        <div className="content">
          <p className="categories mb-1">For Girl's</p>
          <p className="subject">STARTING AT $29</p>
          <div className="divide"></div>
          <div className="btn-shop-now">
            <p className="mb-0">SHOP NOW</p>
            <i class="fa-light fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
      <div className="right banner-item">
        <div className="img-bg">
          <img src="/images/advertising-summer/img-02.jpg" alt="" />
        </div>
        <div className="content">
          <p className="categories mb-1">For Boy's</p>
          <p className="subject">STARTING AT $29</p>
          <div className="divide"></div>
          <div className="btn-shop-now">
            <p className="mb-0">SHOP NOW</p>
            <i class="fa-light fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSummer;
