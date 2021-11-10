import React from 'react'
import cartSvg from '../assets/images/dark-cart.svg';
import trashSvg from '../assets/images/trash.svg';

import { Button, CartItem } from '../components'

function Cart() {
  return (
    <div className="Cart">

      <div className="Cart__header interactive-bar">
        
        <div className="Cart__section-label">
          <div className="Cart__section-label-icon-container">
            <img className="image" src={cartSvg} alt="cart" />
          </div>
          <h1 className="Cart__section-label-text section-label">Cart</h1>
        </div>

        <Button className="Cart__clear-button" theme="weak">
          <div className="Cart__clear-button-icon-container">
            <img className="image" src={trashSvg} alt="trash" />
          </div>
          <p className="Cart__clear-button-text">Clear cart</p>
        </Button>


      </div>

      <div className="Cart__items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="Cart__footer">
        <div className="Cart__counter">
          Total entries: <span className="Cart__counter-state">3 pcs.</span>
        </div>
        <div className="Cart__price">
          Order price: <span className="Cart__price-state">30 $</span>
        </div>
      </div>

      <nav className="Cart__navigation interactive-bar">
        <Button className="Cart__back-button" shape="rounded" theme="weak-bordered">
          Back 
        </Button>
        <Button className="Cart__pay-button" shape="rounded" theme="main-colored">
          Pay now
        </Button>
      </nav>

    </div>
    )
}

export default Cart