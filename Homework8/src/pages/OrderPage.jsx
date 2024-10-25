import React from "react";
import OrderStep from "../components/OrderStep";

const OrderPage = () => {
  return (
    <div className="wrap">
      <div className="order">
        <OrderStep title="01. Shipping Address" isOpen>
          <div className="order__box">
            <form className="order__check">
              <div className="order__title">Check as a guest or register</div>
              <div className="order__subtitle">
                Register with us for future convenience
              </div>
              <ul className="order__inputs order__inputs_checkboxes">
                <li>
                  <input
                    type="radio"
                    name="check"
                    id="checkout"
                    value="checkout"
                  />
                  <label htmlFor="checkout">checkout as guest</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="check"
                    id="register"
                    value="register"
                  />
                  <label htmlFor="register">register</label>
                </li>
              </ul>
              <div className="order__title">register and save time!</div>
              <div className="order__subtitle">
                Register with us for future convenience
              </div>
              <ul className="order__advantages">
                <li>
                  <div className="order__subtitle">
                    <i className="fa fa-angle-double-right"></i>&nbsp;Fast and
                    easy checkout
                  </div>
                </li>
                <li>
                  <div className="order__subtitle">
                    <i className="fa fa-angle-double-right"></i>&nbsp;Easy
                    access to your order history and status
                  </div>
                </li>
              </ul>
              <button
                className="order__button"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span>continue</span>
              </button>
            </form>

            <form className="order__login">
              <div className="order__title">Already registered?</div>
              <div className="order__subtitle">Please log in below</div>
              <ul className="order__inputs order__inputs_text">
                <li>
                  <label htmlFor="email">
                    EMAIL ADDRESS&nbsp;<span className="alert">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </li>
                <li>
                  <label htmlFor="password">
                    PASSWORD&nbsp;<span className="alert">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                  <span className="alert">* Required Fields</span>
                </li>
              </ul>
              <div className="order__button_box">
                <button
                  className="order__button"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span>log in</span>
                </button>
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>
        </OrderStep>
        <OrderStep title="02. Billing Information">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem sunt delectus voluptatum magnam, accusamus sit enim
            quia quisquam pariatur hic, unde nisi inventore impedit eveniet
            necessitatibus omnis, vero veritatis fugiat.
          </p>
        </OrderStep>
        <OrderStep title="03. Shipping Information">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, sunt. Reiciendis dolor impedit quisquam accusamus
            suscipit in corrupti tenetur, consequuntur vero sint et omnis
            voluptatum iusto aspernatur blanditiis error dolore.
          </p>
        </OrderStep>
        <OrderStep title="04. Shipping Method">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nulla quas nobis. Laboriosam veritatis quia reprehenderit eveniet
            qui, voluptate distinctio voluptatum dolorum eligendi repellat. Quo,
            reiciendis. Voluptatibus ipsum pariatur ipsam.
          </p>
        </OrderStep>
        <OrderStep title="05. Payment Method">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam
            distinctio molestiae aspernatur tempore neque quae architecto
            nostrum eaque repellat. Modi praesentium perspiciatis cumque rerum
            debitis error velit ut sequi?
          </p>
        </OrderStep>
        <OrderStep title="06. Order Review">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quo ipsa est, veniam magni numquam voluptate similique suscipit,
            dignissimos quae ratione aliquid quos voluptatibus at, ab ea
            cupiditate excepturi odit.
          </p>
        </OrderStep>
      </div>
    </div>
  );
};

export default OrderPage;
