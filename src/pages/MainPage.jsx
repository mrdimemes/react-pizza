import React from 'react'
import PropTypes from 'prop-types';

import { CategoriesMenu, SortMenu, PizzaGallery } from '../components/';


function MainPage() {
    return (
      <div className="App__wrapper">
        <div className="interactive-bar App__interactive-bar">
          <CategoriesMenu />
          <SortMenu />
        </div>

        <section className="App__gallery-section">
          <h1 className="App__gallery-section-label section-label">All pizzas</h1>
          
          <PizzaGallery />
          
        </section>
      </div>
    )
}

MainPage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  pizzaTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  pizzaSizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  pizzas: PropTypes.arrayOf(PropTypes.object)
};

export default MainPage;