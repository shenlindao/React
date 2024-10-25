import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  const handleChangeQuantity = (e) => {
    const quantity = e.target.value === "" ? "" : Number(e.target.value);

    dispatch(updateQuantity({ id: item.id, quantity: quantity }));
  };

  const handleBlur = (e) => {
    const quantity = e.target.value === "" ? 1 : Number(e.target.value);

    if (quantity === 0) {
      dispatch(updateQuantity({ id: item.id, quantity: 0 }));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: quantity }));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__pic">
        <Link to={`/product/${item.id}`}>
          <img src={item.imgSrc} alt="cart_item" />
        </Link>
      </div>
      <div className="cart__details">
        <div className="cart__prod_name">
          <Link to={`/product/${item.id}`}>{item.title}</Link>
        </div>
        <div className="cart__props">
          <div className="cart__prod_color">
            Color:&nbsp;<span>{item.color}</span>
          </div>
          <div className="cart__size">
            Size:&nbsp;<span>{item.size}</span>
          </div>
        </div>
      </div>
      <div className="cart__price">${item.price}</div>
      <div className="cart__quantity">
        <input
          type="number"
          className="cart__input"
          value={item.quantity}
          onChange={handleChangeQuantity}
          onBlur={handleBlur}
        />
      </div>
      <div className="cart__shipping">FREE</div>
      <div className="cart__subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <div className="cart__action">
        <FontAwesomeIcon
          className="cart__action__icon"
          icon={faTimesCircle}
          onClick={handleRemoveItem}
        />
      </div>
    </div>
  );
};

export default CartItem;
