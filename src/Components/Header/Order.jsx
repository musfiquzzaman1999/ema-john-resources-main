import React, { useState } from 'react';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import './ReviewItem.css'
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData();
    // console.log(cart)
    const [cart,setCart] =useState(saveCart);
    const handelRemoveFromCart =(id)=>{
      const remaining = cart.filter(product=>product.id!==id);
      setCart(remaining);
      removeFromDb(id)

    }
    console.log(cart)

    const handelClearCart =()=>{
setCart([]);
deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
             {
               cart.map(product=><ReviewItem key={product.id} product={product} handelRemoveFromCart={handelRemoveFromCart} ></ReviewItem>)
             }
            </div>
            <div className='cart-container'>
               <Cart cart={cart} handelClearCart={handelClearCart} ></Cart>

            </div>
        </div>
    );
};

export default Order;