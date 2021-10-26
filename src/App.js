import './styles/css/App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <div className="logo-container__image">
            <img src="../public/images/logo.svg" alt="pizza"></img>
          </div>
          <div className="logo-container__text">
            <h1 className="logo-label">REACT PIZZA</h1>
            <p className="logo-description">most delicious pizza in the universe</p>
          </div>
        </div>
        <div className="cart-button"></div>
      </header>
    </div>
  );
}

export default App;
