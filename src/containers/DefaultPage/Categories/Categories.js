import { useContext, useEffect, useState } from "react";
import "../Categories/Categories.scss";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import ItemFilterCategories from "./FilterProduct/ItemFilterCategories/ItemFilterCategories";
import ItemFilterSize from "./FilterProduct/ItemFilterSize/ItemFilterSize";
import ItemFilterPrice from "./FilterProduct/ItemFilterPrice/ItemFilterPrice";
import AdvertisingDiscountJacket from "../../../components/Advertising/AdvertisingDiscountJacket/AdvertisingDiscountJacket";
import ItemProduct from "../../../components/Product/ItemProduct/ItemProduct";
import TopBanner from "../../../components/TopBanner/TopBanner";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { useParams } from "react-router-dom";
import { PriceContext } from "./context/priceContext";
import { DataContext } from "../../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";
import FilterProduct from "./FilterProduct/FilterProduct";

const Categories = () => {
  const { openFilterPopup, setOpenFilterPopup } = useContext(DataContext);
  const { filterProductData, setFilterProductData } = useContext(DataContext);

  const [showBoxSort, setShowBoxSort] = useState(false);

  const { productData } = useContext(DataContext);

  const [renderProduct, setRenderProduct] = useState([]);

  const [sortBy, setSortBy] = useState();

  const params = useParams();

  const productSuggestData = [];
  productSuggestData.push(productData[0]);
  productSuggestData.push(productData[1]);
  productSuggestData.push(productData[2]);
  productSuggestData.push(productData[3]);

  const [grid2, setGrid2] = useState(false);
  const [grid4, setGrid4] = useState(true);
  const [grid5, setGrid5] = useState(false);

  const handleGrid = (grid) => {
    switch (grid) {
      case 2:
        setGrid2(true);
        setGrid4(false);
        setGrid5(false);
        break;
      case 4:
        setGrid2(false);
        setGrid4(true);
        setGrid5(false);
        break;
      case 5:
        setGrid2(false);
        setGrid4(false);
        setGrid5(true);
        break;
      default:
        break;
    }
  };

  const [checkBoxSort, setCheckBoxSort] = useState([
    {
      id: 1,
      name: "Default Sorting",
      checked: false,
    },
    {
      id: 2,
      name: "Sort by Popularity",
      checked: false,
    },
    {
      id: 3,
      name: "Sort by Best Sellers",
      checked: false,
    },
    {
      id: 4,
      name: "Sort by Price: low to hight",
      checked: false,
    },
    {
      id: 5,
      name: "Sort by Price: hight to low",
      checked: false,
    },
  ]);

  // const handleCheckFilter = (name) => {
  //   setSortBy(name);
  //   handleRenderProduct();
  // };

  const handleRenderProduct = () => {
    if (sortBy === "Default Sorting") {
      setRenderProduct(filterProductData);
    } else if (sortBy === "Sort by Popularity") {
      const filterProducts = filterProductData.filter((val) =>
        val.category.includes("New Arrivals")
      );
      setRenderProduct(filterProducts);
    } else if (sortBy === "Sort by Best Sellers") {
      const filterProducts = filterProductData.filter((val) =>
        val.category.includes("Best Sellers")
      );
      setRenderProduct(filterProducts);
    } else if (sortBy === "Sort by Price: low to hight") {
      const filterProducts = [...filterProductData];
      filterProducts.sort((a, b) => {
        return a.price - b.price;
      });
      setRenderProduct(filterProducts);
    } else if (sortBy === "Sort by Price: hight to low") {
      const filterProducts = [...filterProductData];
      filterProducts
        .sort((a, b) => {
          return a.price - b.price;
        })
        .reverse();
      setRenderProduct(filterProducts);
    }
  };

  useEffect(() => {
    handleRenderProduct();
  }, [sortBy, filterProductData]);

  useEffect(() => {
    handleRenderProduct();
  }, []);

  return (
    <div className="categories-page container">
      <TopBanner page={"CATEGORIES"} />
      <div className="m-0 p-0 body-content">
        <div className="select-render">
          {/* <FilterProduct /> */}
          <div className="left-filter">
            <div
              className="btn-close-filter"
              onClick={() => setOpenFilterPopup(true)}
            >
              <p className="mb-0">FILTER</p>
              <i class="fa-light fa-arrow-right-long"></i>
            </div>
            <div className="filter-product">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowBoxSort(false);
                }}
              >
                <div className="filter-box">
                  <div
                    className="filter-by"
                    onClick={() => setShowBoxSort(!showBoxSort)}
                  >
                    <p className="mb-0">
                      {sortBy ? sortBy : "Default Sorting"}
                    </p>
                    <i class="fa-sharp fa-regular fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      showBoxSort ? "list-option active" : "list-option"
                    }
                  >
                    <div className="box-list-option">
                      {checkBoxSort.map((item) => (
                        <div
                          className={
                            item.name === sortBy
                              ? "item-option active"
                              : "item-option"
                          }
                          key={item.id}
                          onClick={() => {
                            setSortBy(item.name);
                          }}
                        >
                          <div className="input-box">
                            <label htmlFor={item.name} className="mb-0">
                              {item.name}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </OutsideClickHandler>
            </div>
          </div>
          <div className="right-filter">
            <div className="layout">
              <div className="filter-grid">
                <label
                  className={grid2 ? "grid active" : "grid"}
                  onClick={() => {
                    handleGrid(2);
                  }}
                >
                  <i className="fa-sharp fa-solid fa-list"></i>
                </label>
                <label
                  className={grid4 ? "grid active" : "grid"}
                  onClick={() => {
                    handleGrid(4);
                  }}
                >
                  <i className="fa-sharp fa-solid fa-grid"></i>
                </label>
                <label
                  className={grid5 ? "grid active" : "grid"}
                  onClick={() => {
                    handleGrid(5);
                  }}
                >
                  <i className="fa-sharp fa-solid fa-grid-4"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="right p-0">
          <div
            className={
              grid2
                ? "render-list-products grid-2"
                : grid4
                ? "render-list-products grid-4"
                : grid5
                ? "render-list-products grid-5"
                : "render-list-products grid-4"
            }
          >
            {renderProduct.length > 0
              ? renderProduct.map((product) => (
                  <ItemProduct
                    key={product.id}
                    idProduct={product.id}
                    imgProduct01={product?.image[0]}
                    imgProduct02={product?.image[1]}
                    categoryName={product?.category[0]}
                    productName={product?.name}
                    price={product?.price}
                    rate={product?.review}
                    discount={product?.promotion}
                    featured={product?.featured}
                    diverseProduct={false}
                  />
                ))
              : // <p className="mb-0 no-product">
                //   No products were found matching your selection.
                // </p>
                filterProductData.map((product) => (
                  <ItemProduct
                    key={product.id}
                    idProduct={product.id}
                    imgProduct01={product?.image[0]}
                    imgProduct02={product?.image[1]}
                    categoryName={product?.category[0]}
                    productName={product?.name}
                    price={product?.price}
                    rate={product?.review}
                    discount={product?.promotion}
                    featured={product?.featured}
                    diverseProduct={false}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
