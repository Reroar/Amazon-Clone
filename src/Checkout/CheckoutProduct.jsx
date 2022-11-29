import React from 'react';
import { useStateValue } from '../StateProvider';
import "./CheckoutProduct.css";

function CheckoutProduct({ id, img, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>

    <img className='checkoutProduct__image' src={img} alt="checkoutProduct__image" />

    <div className='checkoutProduct__info'>

        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
            <small>.00</small>
        </p>
        <div className='checkoutProduct__rating'>
            {Array(rating)
            .fill()
            .map((_,i) => (
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
    </div>
    </div>
  )
}

export default CheckoutProduct;