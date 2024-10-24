import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import cartIMG from "../assets/img/icons/cart.svg";

const HeaderCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="header__block2__cart__link">
      <img className="header__block2__cart" src={cartIMG} alt="cart" />
      {totalQuantity > 0 && (
        <div className="header__block2__cart__badge">
          {totalQuantity}
        </div>
      )}
    </Link>
  );
};

export default HeaderCart;