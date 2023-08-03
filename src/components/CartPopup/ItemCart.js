import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";

const ItemCart = ({ idProduct, amount, size, color }) => {
  const { productData } = useContext(DataContext);
  const { cartData, setCartData } = useContext(DataContext);
  const { cartTotalAmount, setCartTotalAmount } = useContext(DataContext);

  const filterProduct = productData.filter((val) => val.id === idProduct);

  const cloneData = [...filterProduct];
  const productInfo = cloneData[0];

  const removeItem = () => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.idProduct != idProduct)
    );
    // setCartTotalAmount((prevTotal) => prevTotal + (amount*(productInfo.price)));
  };

  return (
    <div className="item-product d-flex">
      <div className="img-product-c">
        <img src={`/${productInfo?.image[0]}`} alt="" />
      </div>
      <div className="product-info">
        <p className="name-product">{productInfo?.name} </p>
        <div className="quantity">
          <p className="amount mb-0">{amount}</p>
          <i class="fa-light fa-xmark"></i>
          <p className="price mb-0">${productInfo.price}.00</p>
        </div>
      </div>
      <div
        className="btn-delete-item"
        onClick={() => {
          removeItem();
        }}
      >
        <i class="fa-light fa-xmark"></i>
      </div>
    </div>
  );
};

export default ItemCart;
