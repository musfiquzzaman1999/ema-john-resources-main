import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props);
    const {name,img,price,ratings,seller} = props.product;
    const handelAddToCart =props.handelAddToCart;
    return (
        <div className='product-cart'>
        <img src={img}></img>
        <div className='details'>
        <h4>{name}</h4>
        <h5>Price:${price}</h5>
        <p>Manufacturer:{seller}</p>
        <p> Rating:{ratings}stars </p>
        </div>
        <button className='btn-cart' onClick={()=>handelAddToCart(props.product)}>add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
          
            
        </div>
    );
};

export default Products;