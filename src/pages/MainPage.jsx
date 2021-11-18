import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { CategoriesMenu, SortMenu, PizzaGallery } from '../components/';


// Component for main page (gallery) representation.
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// productCategories: array of strings, each string represents
//   a product category.
// activeCategory: integer >= 0. Index of productCategories state.

function MainPage({ productCategories, activeCategory }) {
  return (
    <div className='App__wrapper'>
      <div className='interactive-bar App__interactive-bar'>
        <CategoriesMenu />
        <SortMenu />
      </div>

      <section className='App__gallery-section'>
        <h1 className='App__gallery-section-label section-label'>
          <span className='App__gallery-section-label-category'>
            { productCategories[activeCategory] } 
          </span>
          <span> pizzas</span>
        </h1>

        <PizzaGallery />

      </section>
    </div>
  )
}

MainPage.propTypes = {
  productCategories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCategory: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    productCategories: state.filters.productCategories,
    activeCategory: state.filters.activeCategory,
  }
}

export default connect(mapStateToProps)(MainPage);