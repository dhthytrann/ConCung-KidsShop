import { useContext, useEffect, useState } from "react";
import "../FilterProductPopup/FilterProductPopup.scss";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";
import { Empty } from "antd";

const FilterProductPopup = () => {
  const [keyFilterPrice, setKeyFilterPrice] = useState([
    {
      id: 5,
      type: "price",
      name: "$0.00 - $400.00",
      priceStart: 0,
      priceGoal: 400,
      inStock: 5,
      checked: false,
    },
  ]);
  const [keyFilterCategory, setKeyFilterCategory] = useState([]);

  const { productData } = useContext(DataContext);

  const { filterProductData, setFilterProductData } = useContext(DataContext);

  const { openFilterPopup, setOpenFilterPopup } = useContext(DataContext);

  const [checkBoxCategories, setCheckBoxCategories] = useState([
    {
      id: 1,
      type: "category",
      name: "All Product",
      inStock: 19,
      checked: false,
    },
    {
      id: 2,
      type: "category",
      name: "Pictorial Book",
      inStock: 59,
      checked: false,
    },
    {
      id: 3,
      type: "category",
      name: "Milk For Baby",
      inStock: 34,
      checked: false,
    },
    {
      id: 4,
      type: "category",
      name: "Gifts & Others",
      inStock: 31,
      checked: false,
    },
    {
      id: 5,
      type: "category",
      name: "Mother & Daughter",
      inStock: 60,
      checked: false,
    },
    {
      id: 6,
      type: "category",
      name: "Secures & Health",
      inStock: 60,
      checked: false,
    },
    {
      id: 7,
      type: "category",
      name: "Baby Toys",
      inStock: 7,
      checked: false,
    },
    {
      id: 8,
      type: "category",
      name: "Apparels For Baby",
      inStock: 20,
      checked: false,
    },
    {
      id: 9,
      type: "category",
      name: "Candy Cake",
      inStock: 10,
      checked: false,
    },
    {
      id: 10,
      type: "category",
      name: "Baby Carriage",
      inStock: 10,
      checked: false,
    },
  ]);

  const [checkboxSize, setChexboxSize] = useState([
    {
      id: 1,
      type: "size",
      name: "Large",
      inStock: 5,
      checked: false,
    },
    {
      id: 2,
      type: "size",
      name: "Extra Large",
      inStock: 15,
      checked: false,
    },
    {
      id: 3,
      type: "size",
      name: "Medium",
      inStock: 5,
      checked: false,
    },

    {
      id: 4,
      type: "size",
      name: "Small",
      inStock: 8,
      checked: false,
    },
  ]);

  const [checkboxColor, setChexboxColor] = useState([
    {
      id: 1,
      type: "color",
      name: "Black",
      inStock: 5,
      checked: false,
    },
    {
      id: 2,
      type: "color",
      name: "Blue",
      inStock: 5,
      checked: false,
    },
    {
      id: 3,
      type: "color",
      name: "Brown",
      inStock: 5,
      checked: false,
    },

    {
      id: 4,
      type: "color",
      name: "Green",
      inStock: 5,
      checked: false,
    },
  ]);

  const [checkboxPrice, setChexboxPrice] = useState([
    {
      id: 1,
      type: "price",
      name: "$0.00 - $100.00",
      priceStart: 0,
      priceGoal: 100,
      inStock: 5,
      checked: false,
    },
    {
      id: 2,
      type: "price",
      name: "$100.00 - $200.00",
      priceStart: 100,
      priceGoal: 200,
      inStock: 5,
      checked: false,
    },
    {
      id: 3,
      type: "price",
      name: "$200.00 - $300.00",
      priceStart: 200,
      priceGoal: 300,
      inStock: 5,
      checked: false,
    },
    {
      id: 4,
      type: "price",
      name: "$300.00 - $400.00",
      priceStart: 300,
      priceGoal: 400,
      inStock: 5,
      checked: false,
    },
  ]);

  const handleCheckedSize = (id) => {
    setChexboxSize((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
  };

  const handleCheckedPrice = (id) => {
    setChexboxPrice((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
    setChexboxPrice((prev) => {
      return prev.map((item) => {
        if (item.id != id) {
          return {
            ...item,
            checked: false,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });

    const findItem = checkboxPrice.filter((item) => {
      return item.id === id;
    });
    setKeyFilterPrice(findItem);
    //resultFilter();
  };

  const handleCheckedCategories = (id) => {
    setCheckBoxCategories((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
    setCheckBoxCategories((prev) => {
      return prev.map((item) => {
        if (item.id != id) {
          return {
            ...item,
            checked: false,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });

    const findItem = checkBoxCategories.filter((item) => {
      return item.id === id;
    });
    setKeyFilterCategory(findItem);
  };

  const [resultArr, setResultArr] = useState([]);
  const resultFilter = () => {
    const filterSize = checkboxSize.filter((val) => val.checked);
    // const filterColor = checkboxColor.filter((val) => val.checked);
    const filterPrice = checkboxPrice.filter((val) => val.checked);

    const filterCategory = checkBoxCategories.filter((val) => val.checked);

    setResultArr(filterSize.concat(filterPrice, filterCategory));
  };

  const removeTag = (tag) => {
    const name = tag.name;
    switch (true) {
      case tag.type === "size":
        setChexboxSize((prev) => {
          return prev.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                checked: false,
              };
            } else {
              return {
                ...item,
              };
            }
          });
        });
        resultFilter();
        break;
      case tag.type === "color":
        setChexboxColor((prev) => {
          return prev.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                checked: false,
              };
            } else {
              return {
                ...item,
              };
            }
          });
        });
        resultFilter();
        break;
      case tag.type === "price":
        setChexboxPrice((prev) => {
          return prev.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                checked: false,
              };
            } else {
              return {
                ...item,
              };
            }
          });
        });
        resultFilter();
        break;
      case tag.type === "category":
        setCheckBoxCategories((prev) => {
          return prev.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                checked: false,
              };
            } else {
              return {
                ...item,
              };
            }
          });
        });
        resultFilter();
        break;

      default:
        break;
    }
  };

  const resetAllFilter = () => {
    setChexboxSize((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });
    });
    setChexboxColor((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });
    });
    setChexboxPrice((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });
    });
    setCheckBoxCategories((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });
    });
  };

  const handleFilterProducts = () => {
    if (keyFilterCategory.length > 0) {
      if (keyFilterCategory[0].name != "All Product") {
        const arrFilterCategory = productData.filter(
          (val) => val.category[1] === keyFilterCategory[0].name
        );

        // console.log("array category", keyFilterCategory[0].name);

        const arrFilterPrice = arrFilterCategory.filter(
          (val) =>
            val.price >= Number(keyFilterPrice[0].priceStart) &&
            val.price <= Number(keyFilterPrice[0].priceGoal)
        );

        setFilterProductData(arrFilterPrice);
      } else {
        const arrFilterPrice = productData.filter(
          (val) =>
            val.price >= Number(keyFilterPrice[0].priceStart) &&
            val.price <= Number(keyFilterPrice[0].priceGoal)
        );
        setFilterProductData(arrFilterPrice);
      }
    }
  };

  useEffect(() => {
    resultFilter();
  }, [checkboxSize, checkboxColor, checkboxPrice, checkBoxCategories]);

  useEffect(() => {
    handleFilterProducts();
  }, [resultArr, keyFilterPrice, keyFilterCategory]);

  return (
    <div
      className={
        openFilterPopup ? "filter-product-popup open" : "filter-product-popup"
      }
    >
      <OutsideClickHandler onOutsideClick={() => setOpenFilterPopup(false)}>
        <div
          className={
            openFilterPopup
              ? "filter-product-popup-box"
              : "filter-product-popup-box animate"
          }
        >
          <div className="header-filter-product">
            <div className="box-action">
              <div
                className="btn-close-filter"
                onClick={() => setOpenFilterPopup(false)}
              >
                <p className="mb-0">FILTER</p>
                <i class="fa-light fa-arrow-left-long"></i>
              </div>
              {resultArr.length > 0 && (
                <p
                  className="clean-all mb-0"
                  onClick={() => {
                    resetAllFilter();
                  }}
                >
                  Clean All
                </p>
              )}
            </div>
            {resultArr.length > 0 && (
              <div className="box-tag">
                <p className="main-title mb-3">Tag</p>
                <div className="list-tag">
                  {resultArr &&
                    resultArr.map((item) => (
                      <div
                        className="item-tag"
                        key={item.id}
                        onClick={() => removeTag(item)}
                      >
                        <p className="tag-name mb-0">{item.name}</p>
                        <i class="fa-light fa-xmark"></i>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="list-filter-box">
            <div className="filter-box">
              <p className="main-title mb-3">Categories</p>
              <div className="box-list-option">
                {checkBoxCategories.map((item) => {
                  return (
                    <div
                      className="item-option"
                      key={item.id}
                      onClick={() => {
                        handleCheckedCategories(item.id);
                      }}
                    >
                      <div className="input-box">
                        <input
                          checked={item.checked}
                          type="checkbox"
                          id={item.name}
                        />
                        <label
                          htmlFor={item.name}
                          onClick={() => {
                            handleCheckedCategories(item.id);
                          }}
                        >
                          {item.name}
                        </label>
                      </div>
                      <p className="stock mb-0">({item.inStock})</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="filter-box">
              <p className="main-title mb-3">Price</p>
              <div className="box-list-option">
                {checkboxPrice.map((item) => {
                  return (
                    <div
                      className="item-option"
                      key={item.id}
                      onClick={() => {
                        handleCheckedPrice(item.id);
                      }}
                    >
                      <div className="input-box">
                        <input
                          checked={item.checked}
                          type="checkbox"
                          id={item.name}
                        />
                        <label
                          htmlFor={item.name}
                          onClick={() => {
                            handleCheckedPrice(item.id);
                          }}
                        >
                          {item.name}
                        </label>
                      </div>
                      <p className="stock mb-0">({item.inStock})</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="filter-box">
              <p className="main-title mb-3">Size</p>
              <div className="box-list-option">
                {checkboxSize.map((item) => {
                  return (
                    <div
                      className="item-option"
                      key={item.id}
                      onClick={() => {
                        handleCheckedSize(item.id);
                      }}
                    >
                      <div className="input-box">
                        <input
                          checked={item.checked}
                          type="checkbox"
                          id={item.name}
                        />
                        <label
                          htmlFor={item.name}
                          onClick={() => {
                            handleCheckedSize(item.id);
                          }}
                        >
                          {item.name}
                        </label>
                      </div>
                      <p className="stock mb-0">({item.inStock})</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>

      <div className="close-popup" onClick={() => setOpenFilterPopup(false)}>
        <i class="fa-regular fa-xmark"></i>
      </div>
    </div>
  );
};

export default FilterProductPopup;
