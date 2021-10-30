import './styles/css/App.css'

function App() {
  return (
    <div className="App">

      <header className="header App__header">
        
        <div className="header__logo">
          <div className="header__logo-image-container">
            <img className="image" src="./images/logo.svg" alt="pizza"></img>
          </div>
          <div className="header__logo-text">
            <h1 className="header__logo-label">REACT PIZZA</h1>
            <p className="header__logo-description">most delicious pizza in the universe</p>
          </div>
        </div>

        <div className="header__cart-button button_shape_rounded button_theme_main-colored">
          <div className="header__cart-button-cost">7.33 $</div>
          <div className="header__cart-button-separator button-separator button-separator_theme_light"></div>
          <div className="header__cart-button-icon-container">
            <img className="image" src="./images/cart.svg" alt="cart"></img>
          </div>
          <div className="header__cart-button-inputs-counter">3</div>
        </div>
      </header>

      <div className="App__wrapper">
        <div className="interactive-bar">

          <div className="categories-menu popup-menu">
            <div className="categories-menu__popup-marker popup-menu__marker popup-menu__marker_closed">
              <img className="image" src="./images/arrow-top.svg" alt="marker"></img>
            </div>
            <p className="categories-menu__popup-invite-text popup-menu__invite-text">
              Category:<span className="categories-menu__popup-selected popup-menu__selected">all</span>
            </p>
            <ul className="categories-menu__items popup-menu__items">
              <li className="categories-menu__item categories-menu__item_active popup-menu__item popup-menu__item_active">all</li>
              <li className="categories-menu__item popup-menu__item">meat</li>
              <li className="categories-menu__item popup-menu__item">vegetarian</li>
              <li className="categories-menu__item popup-menu__item">grill</li>
              <li className="categories-menu__item popup-menu__item">spicy</li>
              <li className="categories-menu__item popup-menu__item">closed</li>
            </ul>
          </div>

          <div className="sort-menu popup-menu">
            <div className="popup-menu__marker popup-menu__marker_closed">
              <img className="image" src="./images/arrow-top.svg" alt="marker"></img>
            </div>
            <p className="popup-menu__invite-text">
              Sort by:<span className="popup-menu__selected">popularity</span>
            </p>
            <ul className="popup-menu__items">
              <li className="popup-menu__item popup-menu__item_active">popularity</li>
              <li className="popup-menu__item">price</li>
              <li className="popup-menu__item">alphabet</li>
            </ul>
          </div>
          
        </div>

        <section className="galary-section">
          <h1 className="section-label">All pizzas</h1>
          <div className="pizza-galary">

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

            <div className="pizza-galary__item">
              <div className="pizza-galary__item__image">
                <img src="" alt="pizza"></img>
              </div>
              <h2 className="pizza-galary__item__label">Awesome pizza</h2>
              <div className="pizza-galary__item__options">
                <ul className="option-dough">
                  <li className="options-item active">thin</li>
                  <li className="options-item">traditional</li>
                </ul>
                <div className="option-size">
                  <li className="options-item active">26 cm.</li>
                  <li className="options-item unavailable">30 cm.</li>
                  <li className="options-item">40 cm.</li>
                </div>
              </div>
              <div className="interactive-bar">
                <div className="pizza-galary__item__price">395 ₽</div>
                <div className="pizza-galary__item__order-button">
                  <p className="order-button-text">+ Add</p>
                  <div className="order-button-counter">2</div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
