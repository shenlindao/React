import React from "react";

const OrderStep = ({ title, children, isOpen = false }) => (
  <details className="order__step" open={isOpen}>
    <summary>{title}</summary>
    <div>{children}</div>
  </details>
);

export default OrderStep;
