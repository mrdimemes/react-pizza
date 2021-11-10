import React from 'react'

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
                    <div className="Cart-item__decrease-button button button_theme_main-bordered">-</div>
                    <p className="Cart-item__counter-state">1</p>
                    <div className="Cart-item__encrease-button button button_theme_main-bordered">+</div>
                  </div>

                  <div className="Cart-item__price">10 $</div>
                  <div className="Cart-item__clear-button button button_theme_weak-bordered">×</div>
                </div>
              </div>
    )
}

export default CartItem
