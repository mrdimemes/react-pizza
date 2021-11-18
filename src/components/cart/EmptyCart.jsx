import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../';

import imagePng from '../../assets/images/png/empty-cart.png';

import '../../styles/scss/components/cart/EmptyCart.scss';


// Component for static representation of an empty cart.
// Should be used if cart is empty.
// No props required.

function EmptyCart() {
  return (
    <div className='Empty-cart'>
      <h1 className='Empty-cart__section-label section-label'>
        Your cart is empty 😕
      </h1>
      <p className='Empty-cart__text'>
        Most likely you haven't ordered pizza yet. <br/>
        To order pizza, go to the main page.
      </p>
      <div className='Empty-cart__image-container'>
        <img className='image' src={imagePng} alt='empty cart' />
      </div>
      <Link to='/react-pizza/'>
        <Button
          className='Empty-cart__back-button' 
          shape='rounded'
          theme='dark-colored'
          children='Back'
        />
      </Link>
    </div>
  )
}

export default EmptyCart;