import React from "react";
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";
import Breadcrumbs from "../components/Breadcrumbs";


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Breadcrumbs />
      <div className="wrap">
        <section className="cart">
          <div className="cart__products">
            <div className="cart__titles">
              <div className="cart__title">Product Details</div>
              <div className="cart__title">Unit Price</div>
              <div className="cart__title">Quantity</div>
              <div className="cart__title">Shipping</div>
              <div className="cart__title">Subtotal</div>
              <div className="cart__title">Action</div>
            </div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartTotals />
        </section>
      </div>
    </>
  );
};

export default CartPage;
