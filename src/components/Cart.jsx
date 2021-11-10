import React from 'react'
import cartSvg from '../assets/images/dark-cart.svg';
import trashSvg from '../assets/images/trash.svg';

import { CartItem } from '../components'

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
              
              <div className="Cart__clear-button button button_theme_weak">
                <div className="Cart__clear-button-icon-container">
                  <img className="image" src={trashSvg} alt="trash" />
                </div>
                <p className="Cart__clear-button-text">Clear cart</p>
              </div>

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
              <div className="Cart__back-button button button_shape_rounded button_theme_weak-bordered">Back</div>
              <div className="Cart__pay-button button button_shape_rounded button_theme_main-colored">Pay now</div>
            </nav>

          </div>
    )
}

export default Cart
