import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Cart, EmptyCart } from '../components';


// Component for cart page representation.
// If the cart is empty, CartPage will display the EmptyCart component.
// Otherwise, it will be the Cart component.
//
// All props comes from Redux storage (cart slice).
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// entriesCount: integer >= 0 - total count the of shopping cart entries.
//   Need for rendering decision.

function CartPage({ entriesCount }) {
  const content = () => {
    if (entriesCount) {
      return <Cart />;
    } else {
      return (
        <div className='App__empty-cart-wrapper'>
          <EmptyCart />
        </div>
      );
    }
  }
  return (
    <div className='App__wrapper'>
      <section className='App__cart-section'>
        { content() }
      </section>
    </div>
  )
}

CartPage.propTypes = {
  entriesCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    entriesCount: state.cart.entriesCount
  }
}

export default connect(mapStateToProps)(CartPage);