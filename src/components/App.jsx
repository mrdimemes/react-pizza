import '../styles/scss/App.scss'

import { Header, PopupMenu } from './';


function App() {
  return (
    <div className="App">

      <Header />

      <div className="App__wrapper">
        <div className="interactive-bar App__interactive-bar">

          <PopupMenu 
            className="categories-menu"
            inviteText="Category"
            items={["all", "meat", "vegetarian", "grill", "spicy", "closed"]}
            activeItem={0} 
          />

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

        <section className="App__gallery-section">
          <h1 className="App__gallery-section-label section-label">All pizzas</h1>
          <div className="pizza-gallery">

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
              </div>
            </div>

            <div className="pizza">
              <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
              </div>
              <h2 className="pizza__label">Awesome pizza</h2>
              <div className="pizza__options">
                <ul className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">thin</li>
                  <li className="pizza__options-item">traditional</li>
                </ul>
                <div className="pizza__options-row">
                  <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                  <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                  <li className="pizza__options-item">40 cm.</li>
                </div>
              </div>
              <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">5.57 $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                  <p className="pizza__order-button-text">+ Add</p>
                  <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
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
