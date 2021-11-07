import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { PopupMenu, SortMenu, PizzaGallery } from '../components/';


function MainPage( {categories} ) {
    return (
        <div className="App__wrapper">
        <div className="interactive-bar App__interactive-bar">

          <PopupMenu 
            className="categories-menu"
            inviteText="Category"
            items={categories}
          />

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

const mapStateToProps = (state) => {
  return {
    categories: state.pizzas.categories
  }
}

export default connect(mapStateToProps)(MainPage);