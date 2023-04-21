import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handelRemoveFromCart}) => {
    // console.log(product);
    const {img,name,price,shipping,id} =product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-info">
                <h5>{name}</h5>
                <p>price:{price}</p>
                <p>shipping charge: ${shipping}</p>
            </div>
            <button className='delete-btn' onClick={()=>handelRemoveFromCart(id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItem;