import React from 'react'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { Button, CartItem } from '../components';
import { clearCart } from '../redux/slices/cart'

import cartSvg from '../assets/images/dark-cart.svg';
import trashSvg from '../assets/images/trash.svg';


function Cart({ entries, entriesPrice, entriesCount, clear }) {
  return (
    <div className="Cart">

      <div className="Cart__header interactive-bar">
        
        <div className="Cart__section-label">
          <div className="Cart__section-label-icon-container">
            <img className="image" src={cartSvg} alt="cart" />
          </div>
          <h1 className="Cart__section-label-text section-label">Cart</h1>
        </div>

        <Button className="Cart__clear-button" theme="weak" onClick={clear}>
          <div className="Cart__clear-button-icon-container">
            <img className="image" src={trashSvg} alt="trash" />
          </div>
          <p className="Cart__clear-button-text">Clear cart</p>
        </Button>


      </div>

      <div className="Cart__items">
        {
          entries.map((entry) => {
            return (
              <CartItem entry={entry} />
            );
          })
        }
      </div>

      <div className="Cart__footer">
        <div className="Cart__counter">
          Total entries: <span className="Cart__counter-state">{ entriesCount } pcs.</span>
        </div>
        <div className="Cart__price">
          Order price: <span className="Cart__price-state">{ entriesPrice.toFixed(2) } $</span>
        </div>
      </div>

      <nav className="Cart__navigation interactive-bar">
        <Link to="/">
          <Button className="Cart__back-button" shape="rounded" theme="weak-bordered">
            Back 
          </Button>
        </Link>
        <Button className="Cart__pay-button" shape="rounded" theme="main-colored">
          Pay now
        </Button>
      </nav>

    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    entries: state.cart.entries,
    entriesPrice: state.cart.entriesPrice,
    entriesCount: state.cart.entriesCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      clear: () => {
        dispatch(clearCart());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)