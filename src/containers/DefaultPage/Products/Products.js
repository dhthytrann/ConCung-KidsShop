import { useContext, useEffect, useState } from "react";
import "../Products/Products.scss";
import { DataContext } from "../../../context/dataContext";
import ProductInformation from "./ProductInformation/ProductInformation";
import { useParams } from "react-router-dom";
import DescriptionProduct from "./DescriptionProduct/DescriptionProduct";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";

const Products = () => {
  const { productData } = useContext(DataContext);

  const [idProduct, setIdProduct] = useState();

  const param = useParams();

  const findProduct = productData.filter((val) => val.id === Number(idProduct));
  const cloneProductInfo = [...findProduct][0];

  const filterNewArrivals = productData.filter((val) =>
    val.category.includes("New Arrivals")
  );

  useEffect(() => {
    setIdProduct(param.productId);
  }, [param]);

  return (
    <div className="products-page">
      <div className="product-page-body container">
        {cloneProductInfo && (
          <ProductInformation
            listImg={cloneProductInfo.image}
            category={cloneProductInfo.category}
            productName={cloneProductInfo.name}
            rangePrice={cloneProductInfo.rangePrice}
            review={cloneProductInfo.review}
            color={cloneProductInfo.color}
            size={cloneProductInfo.size}
            sku={cloneProductInfo.sku}
            price={cloneProductInfo.price}
          />
        )}

        <DescriptionProduct />
        <div className="layout-bottom related-products">
          <div className="main-title">
            <p className="mb-0">Related Products</p>
          </div>
          <ListProduct listProduct={filterNewArrivals} />
        </div>
      </div>
    </div>
  );
};

export default Products;
