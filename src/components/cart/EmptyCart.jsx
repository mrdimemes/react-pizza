import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../';

import imagePng from '../../assets/images/png/empty-cart.png';


// Component for static representation of an empty cart.
// Should be used if cart is empty.
// No props required.

function EmptyCart() {
  return (
    <div className='empty-cart'>
      <h1 className='empty-cart__section-label section-label'>
        Your cart is empty 😕
      </h1>
      <p className='empty-cart__text'>
        Most likely you haven't ordered pizza yet. <br/>
        To order pizza, go to the main page.
      </p>
      <div className='empty-cart__image-container'>
        <img className='image' src={imagePng} alt='empty cart' />
      </div>
      <Link to='/'>
        <Button
          className='empty-cart__back-button' 
          shape='rounded'
          theme='dark-colored'
          children='Back'
        />
      </Link>
    </div>
  )
}

export default EmptyCart;