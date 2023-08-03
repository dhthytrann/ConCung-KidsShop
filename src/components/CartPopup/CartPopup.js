import { useContext, useEffect, useState } from "react";
import "../CartPopup/CartPopup.scss";
import ItemCart from "./ItemCart";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";

const CartPopup = () => {
  const { openCart, setOpenCart } = useContext(DataContext);
  const { cartData } = useContext(DataContext);
  const { cartTotalAmount } = useContext(DataContext);


  return (
    <div className={openCart ? "cart-popup-box open" : "cart-popup-box"}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenCart(false);
        }}
      >
        <div className="cart-box-right">
          <div className="cart-title">
            <p className="mb-0 subject">SHOPPING CART</p>
            <div
              className="close-popup"
              onClick={() => {
                setOpenCart(false);
              }}
            >
              <p className="mb-0 mr-2">CLOSE</p>
              <i class="fa-light fa-arrow-right-long"></i>
            </div>
          </div>
          {cartData.length <= 0 ? (
            <p className="mb-0 message">No products in the cart.</p>
          ) : (
            <>
              <div className="cart-content">
                <div className="list-item">
                  {cartData &&
                    cartData
                      .map((item) => (
                        <ItemCart
                          key={item.id}
                          idProduct={item.idProduct}
                          amount={item.amount}
                          size={item.size}
                          color={item.color}
                        />
                      ))
                      .reverse()}
                </div>
              </div>
              <div className="cart-footer">
                <div className="total">
                  <p className="mb-0 subject">Subtotal: </p>
                  <p className="mb-0 price">${cartTotalAmount}.00</p>
                </div>
                <div className="action">
                  <div className="view-cart">
                    <p className="btn-view-cart mb-0">View Cart</p>
                  </div>
                  <div className="check-out">
                    <p className="btn-checkout mb-0">GO TO CHECKOUT</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default CartPopup;
