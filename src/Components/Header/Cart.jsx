import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total =0;
    let totalShiping =0;
    let quantity = 0;
    for( const product of cart){
        product.quantity = product.quantity||1;
        total=total+product.price*product.quantity;
        totalShiping =totalShiping+product.shipping
        quantity = quantity + product.quantity;
        console.log(total);
    }
    const tax =total*7/100
    const grandTotal = (total+tax+totalShiping).toFixed(2);
    return (
        <div className='cart'>
             <h2>Order Summary</h2>
                <h3>total product:{quantity}</h3>
                <h3>total price :${total}</h3>
                <h3>shippinh cost:{totalShiping}</h3>
                <h3>tax:{tax}</h3>
                <h2>Grand total :{grandTotal}</h2>
        </div>
    );
};

export default Cart;