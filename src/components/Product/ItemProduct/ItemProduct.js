import { useContext, useEffect, useState } from "react";
import "../ItemProduct/ItemProduct.scss";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";

const ItemProduct = ({
  idProduct,
  imgProduct01,
  imgProduct02,
  categoryName,
  productName,
  price,
  rate,
  discount,
  featured,
  diverseProduct,
}) => {
  const arrRate = [];
  for (let i = 0; i < rate; i++) {
    arrRate.push(arrRate[i]);
  }

  const arrStar = [1, 2, 3, 4, 5];
  arrStar.splice(0, rate);

  //Handle Feature

  const { cartData, setCartData } = useContext(DataContext);
  const { productData } = useContext(DataContext);
  const { setCartTotalAmount } = useContext(DataContext);
  const { setOpenViewProduct } = useContext(DataContext);
  const { setIdViewProduct } = useContext(DataContext);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products/${idProduct}`, { replace: false });
  };

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
      cloneCartData[existInCart].amount = cloneCartData[existInCart].amount + 1;
      inTotalCart();
    } else {
      const newItem = {
        idCart: cartData.length + 1,
        idProduct: idProduct,
        // size: "XL",
        // color: "Brown",
        amount: 1,
      };

      setCartData((prevCartData) => [...prevCartData, newItem]);
    }
  };

  const handleQuickViewProduct = () => {
    setIdViewProduct(idProduct);
    setOpenViewProduct(true);
  };

  return (
    <div className="item-product">
      <div className="img-product">
        <img
          className="img-01"
          src={`/${imgProduct01}`}
          alt=""
          onClick={() => {
            handleNavigate();
          }}
        />
        <img
          className="img-02"
          src={`/${imgProduct02}`}
          alt=""
          onClick={() => {
            handleNavigate();
          }}
        />
        <div className="badge-top">
          <div className="list-badge">
            {featured && (
              <div className="badge badge-featured mb-1">
                <p className="mb-0">{featured.toUpperCase()}</p>
              </div>
            )}
            {discount && (
              <div className="badge badge-discount">
                <p className="mb-0">{discount.toUpperCase()}</p>
              </div>
            )}
          </div>
          <div className="box-option">
            <div
              className="btn-option add-to-cart mb-1"
              onClick={() => {
                handleQuickViewProduct();
              }}
            >
              <i class="fa-regular fa-magnifying-glass"></i>
            </div>
            <div className="btn-option like">
              <i class="fal fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="product-name mb-1">
          <p className="mb-0">{productName}</p>
        </div>
        <div className="price mb-1">
          <p className="mb-0">${price}.00</p>
          <p className="price-old mb-0">${price + 7}.00</p>
        </div>
        <div className="point mb-3">
          <div className="rate mr-2">
            {arrRate.map((item, idx) => (
              <i
                key={idx}
                className="fa-solid fa-star"
                style={{ color: "#fdcb6e" }}
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
          <div className="reviews-number">
            <p className="mb-0">({rate} Reviews)</p>
          </div>
        </div>
        <div className="description">
          <p className="mb-0">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.
          </p>
        </div>
        <div
          className="btn-add-to-cart"
          onClick={() => {
            handleAddToCard(idProduct);
          }}
        >
          <i class="fal fa-shopping-bag mr-2"></i>
          <p className="mb-0">ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
