import { useContext, useState } from "react";
import ListProduct from "../ListProduct/ListProduct";
import { DataContext } from "../../../context/dataContext";
import "../ListProductAdvertisement/ListProductAdvertisement.scss";

const ListProductAdvertisement = ({ categoryName, imgBanner, content }) => {
  const { productData } = useContext(DataContext);

  const filterDefault = productData.filter((val) =>
    val.category.includes(categoryName)
  );

  const [renderProduct, setRenderProduct] = useState(filterDefault);
  return (
    <div className="list-product-advertisement">
      <div className="tab-titles">
        <p className="title mb-0">{categoryName}</p>
        <div className="view-all">
          <p className="mb-0">View All</p>
          <i class="fa-light fa-arrow-right-long"></i>
        </div>
      </div>
      <div className="list-product-advertisement-box">
        <div className="banner-advertisement">
          <div className="img-banner">
            <img src={imgBanner} alt="" />
          </div>
          <div className="content">
            <p className="category mb-3">{content[0]}</p>
            <p className="subject mb-0">{content[1]}</p>
            <div className="btn-shop-now">
              <p className="mb-0">SHOP NOW</p>
              <i class="fa-light fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
        <ListProduct listProduct={renderProduct} breakPoint={3} />
      </div>
    </div>
  );
};
export default ListProductAdvertisement;
