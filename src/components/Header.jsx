import React from 'react'
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/cart.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { configureStore } from '@reduxjs/toolkit';
import Badge from '@mui/material/Badge';
import CartItem from './CartItem';


export const Header = () => {

  const dispatch = useDispatch();
  const carritoItemsBadge = useSelector(state => state.carrito.carritoItems);
  const carritoItems = useSelector(state => state.carrito);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="header">
    <div className="baner">
      <p> Merry Xmas! 30% off in all the website! Time running down, hurry up!</p>
    </div>
    <div className="header-div">
      <div className="first-third">
        <img className='logo' src={Logo} alt="logo" />
      </div>
      <div className="second-third">
        <input className='search-bar' type="text" placeholder="Search product..." />
        <button className='search-button' type="button">Search</button>
      </div>
      <div className="third-third">
        <div className="cart-div">
          <Badge className='cart-icon'  badgeContent={carritoItemsBadge.length} 
              sx={{ "& .MuiBadge-badge": { backgroundColor: "black", color: "white",  height: '13px',
              minWidth: '10px',
              fontSize: '0.7rem' } }} 
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}>
            <img className='cart' src={Cart} alt="cart" />

            <div className='cart-popup'>
              {carritoItemsBadge.map((item, index) => (
              <CartItem 
              key={index}
              name={item.name}
              salePrice={item.salePrice}
              />))}
          </div>
          </Badge>
        </div>
        

        
      </div>
    </div>
  </div>
  )
}
export default Header;
