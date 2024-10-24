import React from 'react';
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const items = useSelector((state) => state.cart.items);

  const subTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const grandTotal = subTotal;

  return (
    <div className="cart__order">
      <div className="cart__total">
        <div className="cart__total_block1">
          <div className="cart__sub-total">Sub total<span>${subTotal.toFixed(2)}</span></div>
          <div className="cart__grand-total">Grand total<span>${grandTotal.toFixed(2)}</span></div>
        </div>
        <div className="cart__total_block2">
          <button type="submit" className="cart__total-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
