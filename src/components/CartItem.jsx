import React from 'react'
import { Button } from '../components'


function CartItem() {
  return (
    <div className="Cart__item Cart-item">
      <div className="Cart-item__info">
        <div className="Cart-item__image-container">
          <img className="image" src="" alt="pizza" />
        </div>
        <div className="Cart-item__text">
          <h3 className="Cart-item__label">Mega Pizza 1337</h3>
          <p className="Cart-item__description">thin dough, 30 cm.</p>
        </div>
      </div>

      <div className="Cart-item__interactive-bar">
        <div className="Cart-item__counter">
          <Button className="Cart-item__decrease-button" theme="main-bordered" children="-" />
          <p className="Cart-item__counter-state">1</p>
          <Button className="Cart-item__encrease-button" theme="main-bordered" children="+" />
        </div>

        <div className="Cart-item__price">10 $</div>
        <Button className="Cart-item__clear-button" theme="weak-bordered" children="×" />
      </div>
    </div>
  )
}

export default CartItem
