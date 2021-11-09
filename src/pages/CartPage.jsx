function CartPage() {
    return (
      <div className="App__wrapper">
        <section className="App__cart-section">
          <div className="Cart">

            <div className="Cart__header">

              <div className="Cart__section-label">
                <div className="Cart__section-label-icon-container">
                  <img className="image" src="" alt="cart" />
                </div>
                <h1 className="Cart__section-label-text section-label">Cart</h1>
              </div>
              
              <div className="Cart__clear-button button">
                <div className="Cart__clear-button-icon-container">
                  <img className="image" src="" alt="trash" />
                </div>
                <p className="Cart__clear-button-text">Clear cart</p>
              </div>

            </div>


            <div className="Cart__items">

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
                
                <div className="Cart-item__counter">
                  <div className="Cart-item__decrease-button">-</div>
                  <p className="Cart-item__counter-state">1</p>
                  <div className="Cart-item__encrease-button">+</div>
                </div>

                <div className="Cart-item__price">10 $</div>
                <div className="Cart-item__clear-button"></div>
              </div>

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
                
                <div className="Cart-item__counter">
                  <div className="Cart-item__decrease-button">-</div>
                  <p className="Cart-item__counter-state">1</p>
                  <div className="Cart-item__encrease-button">+</div>
                </div>

                <div className="Cart-item__price">10 $</div>
                <div className="Cart-item__clear-button"></div>
              </div>

            </div>

            <div className="Cart__footer">
              <div className="Cart__counter">
                Total entries: <span className="Cart__counter-state">3 pcs.</span>
              </div>

              <div className="Cart__price">
                Order price: <span className="Cart__price-state">30 $</span>
              </div>
            </div>

            <nav className="Cart__navigation">
              <div className="Cart__back-button">Back</div>
              <div className="Cart__pay-button">Pay now</div>
            </nav>

          </div>
          
          
          
        </section>
      </div>
    )
}

export default CartPage;