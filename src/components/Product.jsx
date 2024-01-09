import React from 'react'
import ProductImg from '../assets/images/box.png';


function Product( {name, price, salePrice, id} ) {
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
            <button className='add-2-cart-button' type="button">Add to cart</button>
          </div>
    </div>

  )
}

export default Product