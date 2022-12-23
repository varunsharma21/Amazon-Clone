import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./CheckoutProduct.css"; 
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, price, title, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            
            <img className='checkoutProduct__image' src={ image } alt="" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{ title }</p>
                <p className='checkoutProduct__price'>
                    <CurrencyFormat 
                    // renderText is making product value bold
                    // Know more about it.
                    renderText={(price) => (
                        <>
                            <p className='product__price'>
                                <strong>{price}</strong>
                            </p>
                        </>
                    )}
                    // this gives value in normal text(without bolding)
                    value={price}
                        decimalScale={2}
                        thousandSpacing='2s'
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={"₹"}
                />
                </p>

                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>      
    )
}

export default CheckoutProduct;