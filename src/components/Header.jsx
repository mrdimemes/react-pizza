import React from 'react';
import PropTypes from 'prop-types';

import { Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from './';

import cartSvg from '../assets/images/svg/cart.svg';
import logoSvg from '../assets/images/svg/logo.svg';


// Component for page header representation.
// Contain a logo and a Link to the shopping cart in the form of a Button.
// The shopping cart link only appears on the home page.
//
// All props comes from Redux storage (cart slice).
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// cartEntriesPrice: number > 0 - total price of the shopping cart entries
//   (for the shopping cart Button).
// cartEntriesCount: integer >= 0 - total count the of shopping cart entries
//   (for the shopping cart Button).

function Header({ cartEntriesPrice, cartEntriesCount }) {
  return (
    <header className='header App__header'>

      <Link to='/'>
        <div className='header__logo'>

          <div className='header__logo-image-container'>
            <img className='image' src={logoSvg} alt='pizza' />
          </div>

          <div className='header__logo-text'>
            <h1 className='header__logo-label'>REACT PIZZA</h1>
            <p className='header__logo-description'>
              most delicious pizza in the universe
            </p>
          </div>

        </div>
      </Link>


      <Routes>
        <Route exact path='/' element={
          <Link to='/cart'>

            <Button
              className='header__cart-button'
              shape='rounded'
              theme='main-colored'
            >

              <div className='header__cart-button-cost'>
                { cartEntriesPrice.toFixed(2) } $
              </div>

              <div 
                className={
                  `header__cart-button-separator 
                  button-separator 
                  button-separator_theme_light`}
              />

              <div className='header__cart-button-icon-container'>
                <img className='image' src={cartSvg} alt='cart' />
              </div>

              <div className='header__cart-button-inputs-counter'>
                { cartEntriesCount }
              </div>

            </Button>

          </Link>
        } />
      </Routes>

    </header>
  )
}

Header.propTypes = {
  cartEntriesPrice: PropTypes.number.isRequired,
  cartEntriesCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    cartEntriesPrice: state.cart.entriesPrice,
    cartEntriesCount: state.cart.entriesCount
  }
}

export default connect(mapStateToProps)(Header);