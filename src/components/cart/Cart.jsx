import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, CartItem } from '../';
import { clearCart } from '../../redux/slices/cart';

import cartSvg from '../../assets/images/svg/dark-cart.svg';
import trashSvg from '../../assets/images/svg/trash.svg';

import '../../styles/scss/components/cart/Cart.scss';


// Component for cart entries representation.
// Should be used if cart is not empty.
// Every entry rendered as CartItem component.
//
// All props comes from Redux storage (cart slice).
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// entries: array of entry objects. Can be empty, 
//   in that case none of CartItems will be rendered.
//   Entry object signature: {
//     id: integer > 0 - identificator of product in Redux storage,
//     imageUrl: string or undefined - path to the item image,
//     label: string - product name,
//     type: integer >= 0 - index of product type in Redux storage,
//     size: integer >= 0 - index of product size in Redux storage,
//     count: integer > 0 - number of same products in the cart
// }
// entriesPrice: number >= 0.0 - summary price of all products in the cart.
// entriesCount: integer >= 0 - total count of all products in the cart.
// clear: function() to remove all cart entries.

function Cart({ entries, entriesPrice, entriesCount, clear }) {
  return (
    <div className='Cart'>

      <div className='Cart__header interactive-bar'>

        <div className='Cart__section-label'>
          <div className='Cart__section-label-icon-container'>
            <img className='image' src={cartSvg} alt='cart' />
          </div>
          <h1 className='Cart__section-label-text section-label'>Cart</h1>
        </div>

        <Button className='Cart__clear-button' theme='weak' onClick={clear}>
          <div className='Cart__clear-button-icon-container'>
            <img className='image' src={trashSvg} alt='trash' />
          </div>
          <p className='Cart__clear-button-text'>Clear cart</p>
        </Button>

      </div>

      <div className='Cart__items'>
        {
          entries.map((entry) => {
            return (
              <CartItem entry={entry} />
            );
          })
        }
      </div>

      <div className='Cart__footer'>
        <div className='Cart__counter'>
          <span className='Cart__counter-text'>Total entries: </span>
          <span className='Cart__counter-state'>{ entriesCount } pcs.</span>
        </div>
        <div className='Cart__price'>
          <span className='Cart__price-text'>Order price: </span>
          <span className='Cart__price-state'>
            { entriesPrice.toFixed(2) } $
          </span>
        </div>
      </div>

      <nav className='Cart__navigation interactive-bar'>
        <Link to='/'>
          <Button
            className='Cart__back-button'
            shape='rounded'
            theme='weak-bordered'
            children='Back'
          />
        </Link>
        <Button
          className='Cart__pay-button'
          shape='rounded'
          theme='main-colored'
          children='Pay now'
        />
      </nav>

    </div>
    )
}

Cart.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  entriesPrice: PropTypes.number.isRequired,
  entriesCount: PropTypes.number.isRequired,
  clear: PropTypes.func.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);