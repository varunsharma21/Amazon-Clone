import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="../checkout-ad.jpg" />
                <h2 className='checkout__title'>My Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct 
                        id = {item.id}
                        price={item.price}
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                    />
                ))}

                    {/* <CheckoutProduct 
                        id = {5454}
                        price={8799}
                        title="hdsfkjjjjjjhasdgddddddddddddddfksdjhgfkjhsdfkjdhskjdhlsdjkldsfbhsdhfgjdh"
                        rating={5}
                        image="../Bean-bag.png"
                    />

                    <CheckoutProduct 
                        id = {5454}
                        price={8799}
                        title="hdsfkjjjjjjhasdgddddddddddddddfksdjhgfkjhsdfkjdhskjdhlsdjkldsfbhsdhfgjdh"
                        rating={5}
                        image="../Bean-bag.png"
                    /> */}
            </div>
            
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
