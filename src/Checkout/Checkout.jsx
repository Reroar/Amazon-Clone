import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {

    const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Items in the cart</h2>
        {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
            />
        ))}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
