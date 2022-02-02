import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("this is basket --->", basket);
    const addToBasket = () => {
        // Dispatch the item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>       
            <div className='product__info'>
                <p>{title}</p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                    ))}
                </div>

                {/*  */}
                
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

                {/*  */}

                            {/* <p className='product__price'>
                                <small>₹</small>
                                <strong>{price}</strong>
                            </p> */}
                        
            </div>
            <img src={image}  alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
