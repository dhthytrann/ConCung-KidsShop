import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import OutsideClickHandler from "react-outside-click-handler";
import "../FilterProduct/FilterProduct.scss";

const FilterProduct = () => {
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
      name: "Clothing",
      inStock: 59,
      checked: false,
    },
    {
      id: 3,
      type: "category",
      name: "Accesories",
      inStock: 34,
      checked: false,
    },
    {
      id: 4,
      type: "category",
      name: "Bags",
      inStock: 31,
      checked: false,
    },
    {
      id: 5,
      type: "category",
      name: "Shoses",
      inStock: 60,
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

  const [resultArr, setResultArr] = useState([]);
  const resultFilter = () => {
    const filterSize = checkboxSize.filter((val) => val.checked);
    const filterColor = checkboxColor.filter((val) => val.checked);
    const filterPrice = checkboxPrice.filter((val) => val.checked);
    const filterCategory = checkBoxCategories.filter((val) => val.checked);

    setResultArr(filterSize.concat(filterColor, filterPrice, filterCategory));
    console.log("result", resultArr);
  };

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
    //FresultFilter();
  };

  const handleCheckedColor = (id) => {
    setChexboxColor((prev) => {
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
    //resultFilter();
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
    //resultFilter();
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

  useEffect(() => {
    resultFilter();
  }, [checkboxSize, checkboxColor, checkboxPrice, checkBoxCategories]);

  useEffect(() => {
    console.log("test", resultArr);
  }, []);

  return (
    <div className="filter-product">
      <div className="filter-product-box">
        <form
          action="#"
          className="form-filter"
          onSubmit={handleSubmit(onSubmit)}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowSize(false);
            }}
          >
            <div className="filter-box">
              <div
                className="filter-by sort-by-price"
                onClick={() => setShowSize(!showSize)}
              >
                <p className="mb-0">Select Size</p>
                <i class="fa-sharp fa-regular fa-chevron-down"></i>
              </div>
              <div className={showSize ? "list-option active" : "list-option"}>
                <div className="box-list-option">
                  {checkboxSize.map((item) => (
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
                  ))}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowColor(false);
            }}
          >
            <div className="filter-box">
              <div
                className="filter-by"
                onClick={() => setShowColor(!showColor)}
              >
                <p className="mb-0">Select Color</p>
                <i class="fa-sharp fa-regular fa-chevron-down"></i>
              </div>
              <div className={showColor ? "list-option active" : "list-option"}>
                <div className="box-list-option">
                  {checkboxColor.map((item) => (
                    <div
                      className="item-option"
                      key={item.id}
                      onClick={() => {
                        handleCheckedColor(item.id);
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
                            handleCheckedColor(item.id);
                          }}
                        >
                          {item.name}
                        </label>
                      </div>
                      <p className="stock mb-0">({item.inStock})</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowPrice(false);
            }}
          >
            <div className="filter-box">
              <div
                className="filter-by"
                onClick={() => setShowPrice(!showPrice)}
              >
                <p className="mb-0">Select Price</p>
                <i class="fa-sharp fa-regular fa-chevron-down"></i>
              </div>
              <div className={showPrice ? "list-option active" : "list-option"}>
                <div className="box-list-option">
                  {checkboxPrice.map((item) => (
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
                  ))}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowCategories(false);
            }}
          >
            <div className="filter-box">
              <div
                className="filter-by"
                onClick={() => setShowCategories(!showCategories)}
              >
                <p className="mb-0">Select Category</p>
                <i class="fa-sharp fa-regular fa-chevron-down"></i>
              </div>
              <div className={showCategories ? "list-option active" : "list-option"}>
                <div className="box-list-option">
                  {checkBoxCategories.map((item) => (
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
                  ))}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </form>
      </div>

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
    </div>
  );
};

export default FilterProduct;
