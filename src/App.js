import './styles/css/App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <div className="logo-container__image">
            <img src="./images/logo.svg" alt="pizza"></img>
          </div>
          <div className="logo-container__text">
            <h1 className="logo-label">REACT PIZZA</h1>
            <p className="logo-description">most delicious pizza in the universe</p>
          </div>
        </div>
        <div className="cart-button">
          <div className="cart-button__cost">520 ₽</div>
          <div className="cart-button__separator"></div>
          <div className="cart-button__image">
            <img src="./images/cart.svg" alt="cart"></img>
          </div>
          <div className="cart-button__inputs">3</div>
        </div>
      </header>

      <div className="wrapper">
        <div className="interactive-bar">

          <ul className="categories-menu">
            <li className="category active">All</li>
            <li className="category">Meat</li>
            <li className="category">Vegetarian</li>
            <li className="category">Grill</li>
            <li className="category">Spicy</li>
            <li className="category">Closed</li>
          </ul>

          <div className="sort-menu">
            <div className="sort-menu__marker">
              <img src="./images/arrow-top.svg" alt="marker"></img>
            </div>
            <p className="sort-menu__text">
              Sort by:<span className="sort-menu__key">popularity</span>
            </p>
            <ul className="sort-menu__popup">
              <li className="sort-menu__popup-item active">popularity</li>
              <li className="sort-menu__popup-item">price</li>
              <li className="sort-menu__popup-item">alphabet</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
