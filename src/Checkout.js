import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="../checkout-ad.jpg" />
                <h2 className='checkout__title'>My Basket</h2>
                {/* Item */}
                {/* Item */}
                {/* Item */}
                {/* Item */}
                {/* Item */}
            </div>
            
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
