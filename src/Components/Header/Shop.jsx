import React, { useEffect, useState } from 'react';
import {getShoppingCart,addToDb} from "../../utilities/fakedb";
import Cart from './Cart';
import Products from './Products';

import './Shop.css'

const Shop = () => {
const [products,setProducts] = useState([])
useEffect(()=>{
    fetch ('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[])
useEffect(() => {
  const storedCart =getShoppingCart()
  const saveCart = [];
console.log(storedCart)
for(const id in storedCart){
    const addedProduct = products.find(product=>product.id ===id);
   if(addedProduct){
    const quantity = storedCart[id]
    addedProduct.quantity = quantity;
    saveCart.push(addedProduct);
    
   }

}
setCart(saveCart)

 
}, [products])

const [cart,setCart]=useState([])
const handelAddToCart = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart)
    addToDb(product.id)   
}
const handelClearCart =()=>{
    setCart([]);
    deleteShoppingCart();
        }

    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
               
                products.map(product =><Products product={product} key ={product.id}  handelAddToCart={handelAddToCart}></Products>)
               }

            </div>
            <div className='cart-container'>
               <Cart cart={cart}
               handelClearCart={handelClearCart}></Cart>

            </div>
        </div>
    );
    };

export default Shop;