import React from 'react'
import PropTypes from 'prop-types';

import { Button } from '../components'


function CartItem( {imageUrl, label, type, size, count, price} ) {
  return (
    <div className="Cart__item Cart-item">
      <div className="Cart-item__info">
        <div className="Cart-item__image-container">
          <img className="image" src={imageUrl} alt="pizza" />
        </div>
        <div className="Cart-item__text">
          <h3 className="Cart-item__label">{ label }</h3>
          <p className="Cart-item__description">{ type } dough, { size } cm.</p>
        </div>
      </div>

      <div className="Cart-item__interactive-bar">
        <div className="Cart-item__counter">
          <Button className="Cart-item__decrease-button" theme="main-bordered" children="-" />
          <p className="Cart-item__counter-state">{ count }</p>
          <Button className="Cart-item__encrease-button" theme="main-bordered" children="+" />
        </div>

        <div className="Cart-item__price">{ price } $</div>
        <Button className="Cart-item__clear-button" theme="weak-bordered" children="×" />
      </div>
    </div>
  )
}

CartItem.defaultProps = {
  imageUrl: "./images/default-pizza-image.svg",
};

CartItem.propTypes = {
  imageUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default CartItem
