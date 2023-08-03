import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/dataContext";
import "../ProductInformation/ProductInformation.scss";
import { useParams } from "react-router-dom";

const ProductInformation = ({
  listImg,
  category,
  productName,
  rangePrice,
  review,
  color,
  size,
  sku,
  price,
}) => {
  const { productData } = useContext(DataContext);
  const { cartData, setCartData } = useContext(DataContext);
  const { setCartTotalAmount } = useContext(DataContext);
  const param = useParams();

  const [idProduct, setIdProduct] = useState();

  const [imgShow, setImgShow] = useState(0);

  useEffect(() => {
    setIdProduct(param.productId);
  }, [param]);

  //custom rate
  const arrRate = [];
  const arrStar = [1, 2, 3, 4, 5];
  const handleRate = () => {
    for (let i = 0; i < review; i++) {
      arrRate.push(arrRate[i]);
    }
    arrStar.splice(0, review);
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
    <div className="product-infomation layout-top">
      <div className="image-product-box">
        <div className="list-image-product">
          {listImg.map((img, idx) => {
            return (
              <div
                key={img}
                className={
                  imgShow === idx ? "img-product active" : "img-product"
                }
              >
                <img
                  src={`/${img}`}
                  alt=""
                  onClick={() => {
                    setImgShow(idx);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="img-product-show">
          {imgShow ? (
            <img src={`/${listImg[imgShow]}`} alt="" />
          ) : (
            <img src={`/${listImg[0]}`} alt="" />
          )}
          {/* <img src={`/${listImg[imgShow]}`} alt="" /> */}
        </div>
      </div>
      <div className="content">
        <div className="path">
          <i class="fa-regular fa-house-blank"></i>
          <i class="chev fa-light fa-chevron-right"></i>
          <p className="mb-0 category">Categories</p>
          <i class="chev fa-light fa-chevron-right"></i>
          <p className="mb-0 category">{category[0]}</p>
          <i class="chev fa-light fa-chevron-right"></i>
          <p className="mb-0 name-prod">{productName}</p>
        </div>
        <p className="name-product mb-2">{productName}</p>
        <div className="stock-info mb-3">
          <p className="sku mb-0 mr-3">SKU: {sku}</p>
          <p className="category mb-0">CATEGORY: {`${category[0]}`}</p>
        </div>
        <p className="price mb-0 mb-1">${price}.00</p>
        <div className="review mb-3">
          <div className="star mr-3">
            {arrRate.map(() => (
              <i className="fa-solid fa-star" style={{ color: "#feca57" }}></i>
            ))}
            {arrStar.map(() => (
              <i
                className="fa-duotone fa-star"
                style={{ color: "#a09e9e" }}
              ></i>
            ))}
          </div>
          <p className="review-number mb-0">({review} Reviews )</p>
        </div>
        <p className="description mb-0">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
          adipiscing.
        </p>

        <div className="option mt-4">
          <div className="choose-color">
            <p className="title mb-0 mr-3">Color: </p>
            <div className="box-color">
              {color.map((item) => {
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
              {size.map((item) => {
                return (
                  <div key={item} className="item-box-size">
                    <p className="mb-0">{item}</p>
                  </div>
                );
              })}
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
                handleAddToCard(Number(idProduct));
              }}
            >
              <i class="fal fa-shopping-bag mr-2"></i>
              <p>Add to cart</p>
            </div>
          </div>
        </div>

        <div className="connect">
          <div className="social">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
          </div>
          <div className="wishlist">
            <i class="fa-light fa-heart"></i>
            <p className="mb-0">Add to wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
