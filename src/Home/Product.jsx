import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({id, title, price, rating, img}) {

  const [{basket}, dispatch] = useStateValue();

  console.log('this is the basket',basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>

        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
          <small>.00</small>
        </p>

        <div className="product__rating">
        {Array(rating)
        .fill()
        .map((_,i) => (
          <p>⭐</p>
        ))}
          
        </div>
      </div>

      <img 
        src={img}
        alt="product__image"
      />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
