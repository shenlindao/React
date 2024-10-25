import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import cartIMG from "../assets/img/icons/cart-site-color.svg";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        imgSrc: product.imgSrc,
        color: selectedColor,
        size: selectedSize,
        quantity,
      })
    );
  };

  return (
    <>
      <div className="slider">
        <img src={product.imgSrc} alt="slider_item_1" />
        <div className="slider__arrow-box">
          <Link to="#" className="slider__arrow">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
          <Link to="#" className="slider__arrow">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__block">
          <div className="product-card__category">
            {product.collection} collection
          </div>
          <div className="product-card__underline">
            <div className="product-card__pink-underline"></div>
          </div>
          <div className="product-card__product-name">{product.title}</div>
          <div className="product-card__text">{product.description}</div>
          <div className="product-card__price">${product.price.toFixed(2)}</div>
          <div className="product-card__hr"></div>
          <div className="product-card__property">
            <div className="product-card__choose-box">
              <div className="product-card__choose-title">CHOOSE COLOR</div>
              <select
                className="product-card__custom-select"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className="product-card__choose-box">
              <div className="product-card__choose-title">CHOOSE SIZE</div>
              <select
              className="product-card__custom-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="product-card__choose-box">
              <div className="product-card__choose-title">QUANTITY</div>
              <input
                type="number"
                min="1"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="product-card__select-input"
              />
            </div>
          </div>
          <button
            className="product-card__add-to-cart"
            onClick={handleAddToCart}
          >
            <img src={cartIMG} alt="cart" />
            <span>Add to&nbsp;Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
