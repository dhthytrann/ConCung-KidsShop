import "../TopBanner/TopBanner.scss";

const TopBanner = ({ page }) => {
  return (
    <div className="top-banner-categories ">
      <div className="img-banner">
        <img src="/images/page-categories/top-banner/img.jpg" alt="" />
      </div>
      <div className="content">
          <div className="title mb-1">
            <p className="mb-2 shop-name">Spring Lifechic</p>
            <p className="mb-0">Sale</p>
          </div>
          <p className="sale mb-0"> - UP TO 50% OFF -</p>
          <div className="categories mt-3">
            <i class="fa-duotone fa-house"></i>
            <i class="fa-regular fa-chevron-right"></i>
            <p className="mb-0">Categories</p>
          </div>
        </div>
    </div>
  );
};

export default TopBanner;
