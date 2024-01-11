import React from 'react'
import { useState } from 'react';
import ProductImg from '../assets/images/box.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { configureStore } from '@reduxjs/toolkit';




function Product( {name, price, salePrice, id} ) {
  
  const key = 0;
  const dispatch = useDispatch();
  const carritoItems = useSelector(state => state.carritoItems);


  const handleAddToCart = () => {
    dispatch(addToCart({name, salePrice, id}));

  };

  


  return (
    <div className='item-card'>
        <div className='item-img'>
            <img className='boxImg' src= {ProductImg} alt="item" />
          </div>
          <div className="item-name">
            <p> {name} </p>
          </div>
          <div className="item-prices">
            <div className="item-price">
              <p> {price} € </p>
            </div>
            <div className="sale-price">
              <p> {salePrice} €</p>
            </div>
          </div>
          <div className='add-2-cart'>
            <button className='add-2-cart-button' onClick={handleAddToCart} type="button">Add to cart</button>
          </div>
          
    </div>

  )
}

export default Product