import "../AdvertisingCollection/AdvertisingCollection.scss";

const AdvertisingCollection = () => {
  return (
    <div className="advertising-collection">
      <div className="container">
        <div className="row">
          <div className="left-a col-lg-8">
            <div className="banner-new-collection">
              <div className="img-banner">
                <img src="/images/Page Home/Advertising/img-01.png" alt="" />
              </div>
              <div className="content">
                <p className="collection-name mb-0">New Collection</p>
                <div className="discount">
                  <p className="up-to mb-0 mr-1">UP TO</p>
                  <p className="sale mb-0">35% OFF</p>
                </div>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                </div>
              </div>
            </div>
            <div className="banner-top-trending">
              <div className="img-banner">
                <img src="/images/Page Home/Advertising/img-02.png" alt="" />
              </div>
              <div className="content">
                <p className="collection-name mb-0">Top Trending</p>
                <div className="discount">
                  <p className="mb-0">NEW ACCESSORIES</p>
                </div>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                  <i class="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="right-a col-lg-4">
            <div className="banner-sport">
              <div className="img-banner">
                <img src="/images/Page Home/Advertising/img-03.png" alt="" />
              </div>
              <div className="content">
                <p className="collection-name mb-0">Sport Essentials</p>
                <p className="category mb-0">FOR WOMEN’S</p>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                  <i class="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="banner-new-collection">
              <div className="content">
                <p className="subscribe mb-0">SUBSCRIBE TO OUR</p>
                <p className="newsletter mb-0">NEWSLETTER</p>
                <p className="start mb-0">Start Shopping Right Now</p>
                <div className="form-email-submit">
                  <div className="input-email">
                    <input type="text" placeholder="Email address here..." />
                  </div>
                  <div className="btn-shop-nowa">
                    <p className="mb-0">SUBSCRIBE</p>
                    <i class="fa-light fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingCollection;
