import React from 'react'
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/cart.svg';

export const Header = () => {
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
       <img className='cart' src={Cart} alt="cart" />
      </div>
    </div>
  </div>
  )
}
export default Header;
