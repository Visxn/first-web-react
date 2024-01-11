import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { configureStore } from '@reduxjs/toolkit';
import Box from '../assets/images/box.png'
import { removeFromCart } from '../redux/actions';

function CartItem( { key ,name , salePrice}) {

    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeFromCart({ item }));
    }
  
  return (
    <div className="content-carditem">
        <div className="first-half">
            <div className="product-name">
                { name }
            </div>
            <div className="product-price">
                { salePrice }
            </div>
            <div className="delete-button">
                <div className='delete-btn' onClick={handleRemoveItem} type="button">Remove item</div>
            </div>
        </div>
        <div className="second-half">
            <div className="product-img">
                <img src={Box} alt="product" width={'70px'}/>
            </div>

        </div>

    </div>
  )
}

export default CartItem