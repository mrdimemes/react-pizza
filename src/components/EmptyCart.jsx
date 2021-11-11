import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../components/';


function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1 className="empty-cart__section-label section-label">
        Your cart is empty 😕
      </h1>
      <p className="empty-cart__text">
        Most likely you haven't ordered pizza yet. <br/>
        To order pizza, go to the main page.
      </p>
      <div className="empty-cart__image-container">
        <img src="" alt="empty cart" />
      </div>
      <Link to="/">
        <Button className="empty-cart__back-button" shape="rounded" theme="weak-bordered">
          Back 
        </Button>
      </Link>
    </div>
  )
}

export default EmptyCart
