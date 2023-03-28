import React, { useEffect, useState } from 'react';
import Products from './Products';

import './Shop.css'

const Shop = () => {
const [products,setProducts] = useState([])
useEffect(()=>{
    fetch ('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[])
const [cart,setCart]=useState([])
const handelAddToCart = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart)
}
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
               
                products.map(product =><Products product={product} key ={product.id}  handelAddToCart={handelAddToCart}></Products>)
               }

            </div>
            <div className='cart-container'>
                <h1>cart here</h1>
                <p>total product:{cart.length}</p>

            </div>
        </div>
    );
    };

export default Shop;