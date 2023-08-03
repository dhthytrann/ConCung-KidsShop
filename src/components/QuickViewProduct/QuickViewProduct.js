import { useContext, useState } from "react";
import "../QuickViewProduct/QuickViewProduct.scss";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";

const QuickViewProduct = () => {
  const { openViewProduct, setOpenViewProduct } = useContext(DataContext);
  const { idViewProduct } = useContext(DataContext);
  const { productData } = useContext(DataContext);
  const { cartData, setCartData } = useContext(DataContext);
  const { setCartTotalAmount } = useContext(DataContext);

  const findProduct = productData.filter((val) => val.id === idViewProduct);
  const cloneProductInfo = [...findProduct][0];

  //custom rate
  const arrRate = [];
  const arrStar = [1, 2, 3, 4, 5];
  const handleRate = () => {
    if (cloneProductInfo) {
      for (let i = 0; i < cloneProductInfo.review; i++) {
        arrRate.push(arrRate[i]);
      }
      arrStar.splice(0, cloneProductInfo.review);
    }
  };
  handleRate();

  const [counter, setCounter] = useState(1);

  //Add to Cart
  const inTotalCart = () => {
    const total = cartData.reduce((accumulator, object) => {
      const item = productData.find((val) => val.id === object.idProduct);
      const price = item.price;

      return accumulator + object.amount * price;
    }, 0);
    setCartTotalAmount(total);
  };
  const handleAddToCard = (idProduct) => {
    const existInCart = cartData.findIndex(
      (val) => val.idProduct === idProduct
    );

    const findItem = productData.filter((val) => val.id === idProduct);
    const cloneData = [...findItem];
    const itemInfo = cloneData[0];

    if (existInCart != -1) {
      const cloneCartData = [...cartData];
      cloneCartData[existInCart].amount =
        cloneCartData[existInCart].amount + counter;
      inTotalCart();
    } else {
      const newItem = {
        idCart: cartData.length + 1,
        idProduct: idProduct,
        // size: "XL",
        // color: "Brown",
        amount: counter,
      };

      setCartData((prevCartData) => [...prevCartData, newItem]);
    }
  };

  return (
    <div
      className={
        openViewProduct && cloneProductInfo
          ? "quick-view-product open"
          : "quick-view-product"
      }
    >
      <OutsideClickHandler onOutsideClick={() => setOpenViewProduct(false)}>
        <div className="quick-view-product-popup">
          <div className="quick-view-product-box">
            <div className="list-img-product">
              <div className="img-product">
                <img
                  src={cloneProductInfo && `/${cloneProductInfo.image[0]}`}
                  alt=""
                />
              </div>
            </div>
            <div className="product-info">
              <p className="name-product mb-1">
                {cloneProductInfo && cloneProductInfo.name}
              </p>
              <div className="stock-info mb-3">
                <p className="sku mb-0 mr-4">
                  SKU: {cloneProductInfo && cloneProductInfo.sku}
                </p>
                <p className="category mb-0">
                  CATEGORY:{" "}
                  {cloneProductInfo && `${cloneProductInfo.category[0]}`}
                </p>
              </div>
              <p className="price mb-0 mb-1">
                ${cloneProductInfo && cloneProductInfo.price}.00 
              </p>
              <div className="review mb-3">
                <div className="star mr-3">
                  {arrRate.map((item, idx) => (
                    <i
                      key={idx}
                      className="fa-solid fa-star"
                      style={{ color: "#777d74" }}
                    ></i>
                  ))}
                  {arrStar.map((item, idx) => (
                    <i
                      key={idx}
                      className="fa-duotone fa-star"
                      style={{ color: "#a09e9e" }}
                    ></i>
                  ))}
                </div>
                <p className="review-number mb-0">( 4 Reviews )</p>
              </div>
              <p className="description mb-0">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus liberpuro ate
                vol faucibus adipiscing.
              </p>

              <div className="option mt-4">
                <div className="choose-color">
                  <p className="title mb-0 mr-3">Color: </p>
                  <div className="box-color">
                    {cloneProductInfo &&
                      cloneProductInfo.color.map((item) => {
                        return (
                          <div
                            key={item}
                            className="item-box-color"
                            style={{ backgroundColor: item }}
                          ></div>
                        );
                      })}
                  </div>
                </div>
                <div className="choose-size mt-4">
                  <p className="title mb-0  mr-3">Size: </p>
                  <div className="box-size">
                    {cloneProductInfo &&
                      cloneProductInfo.size.map((item) => {
                        return (
                          <div key={item} className="item-box-size">
                            <p className="mb-0">{item}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="add-cart-box mt-4">
                <div className="btn-counter mr-3 ">
                  <p
                    className="decrease mb-0"
                    onClick={() => {
                      setCounter(counter - 1);
                    }}
                  >
                    -
                  </p>
                  <p className="amount mb-0">
                    {counter >= 1 ? counter : setCounter(1)}
                  </p>
                  <p
                    className="increase mb-0"
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    +
                  </p>
                </div>
                <div
                  className="btn-add-to-cart"
                  onClick={() => {
                    handleAddToCard(idViewProduct);
                  }}
                >
                  <i class="fal fa-shopping-bag mr-2"></i>
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="close-popup"
            onClick={() => setOpenViewProduct(false)}
          >
            <i class="fa-regular fa-xmark"></i>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default QuickViewProduct;
