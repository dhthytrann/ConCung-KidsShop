import { useParams } from "react-router-dom";
import "../AdvertisingDiscountJacket/AdvertisingDiscountJacket.scss";

const AdvertisingDiscountJacket = () => {

  const params = useParams();

  return (
    <div className="advertising-discount-jacket">
      <div className="img-banner">
        <img src="/images/page-categories/top-banner/img-02.jpg" alt="" />
      </div>
      <div className="content">
        <p className="category mb-0">RIODE SHOP</p>
        <p className="stock mb-0">Jackets Collection</p>
        {/* <p className="mb-3">
          <strong>UP TO 70%</strong> DISCOUNT
        </p> */}
        {/* <div className="btn-shop-now">
          <p className="mb-0">SHOP NOW</p>
        </div> */}
      </div>
    </div>
  );
};

export default AdvertisingDiscountJacket;
