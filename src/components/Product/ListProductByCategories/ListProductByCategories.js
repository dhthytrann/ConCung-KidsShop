import { useContext, useEffect, useState } from "react";
import "../ListProductByCategories/ListProductByCategories.scss";
import { DataContext } from "../../../context/dataContext";
import { render } from "react-dom";
import ItemProduct from "../ItemProduct/ItemProduct";
import { Carousel } from "antd";
import ListProduct from "../ListProduct/ListProduct";

const ListProductByCategories = () => {
  const { productData } = useContext(DataContext);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 576, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 968, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [tab, setTab] = useState([
    {
      id: 1,
      name: "Best Sellers",
      active: true,
    },
    {
      id: 2,
      name: "New Arrivals",
      active: false,
    },
    {
      id: 3,
      name: "Our Featured",
      active: false,
    },
  ]);

  const setActiveTab = (id) => {
    setTab(
      tab.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const filterDefault = productData.filter((val) =>
    val.category.includes("Best Sellers")
  );

  const [renderProduct, setRenderProduct] = useState(filterDefault);

  const filterProducts = () => {
    var key = "Best Sellers";
    for (var i = 0; i < tab.length; i++) {
      if (tab[i].active) {
        key = tab[i].name;
      }
    }
    const filter = productData.filter((val) => val.category.includes(key));
    setRenderProduct(filter);
  };

  useEffect(() => {
    filterProducts();
  }, [tab]);

  return (
    <div className="list-product-by-categories">
      <div className="tab-category">
        {tab.map((item) => {
          return (
            <div
              className={item.active ? "item-tab active" : "item-tab"}
              key={item.id}
            >
              <p
                className="mb-0"
                onClick={() => {
                  setActiveTab(item.id);
                }}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="list-product-by-categories-box">
        <ListProduct listProduct={renderProduct} breakPoint={4}/>
      </div>
    </div>
  );
};

export default ListProductByCategories;
