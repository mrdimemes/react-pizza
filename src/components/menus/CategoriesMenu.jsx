import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { PopupMenu } from '../';
import {
  setShownProducts,
  setActiveCategory
} from '../../redux/slices/filters';

import '../../styles/scss/components/menus/CategoriesMenu.scss';


// The CategoriesMenu component is a refinement of the PopupMenu component
// for setting shownProducts (in Redux) by them category.
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// options: array of strings. Options prop for PopupMenu component.
//   In case of CotegoriesMenu, options are product categories.
// activeOption: integer >= 0. Index of the options.
// setActiveOption: function(optionIndex).
// products: array of product objects (see filters Redux slice).
// isProductsLoaded: boolean. Logical flag indicating whether data
//   has been loaded from the server or not.
// display: function(idArray). Function to set shownProducts state of
//   Redux filters store. The idArray is an array of products
//   identificators.

function CategoriesMenu({
  options,
  activeOption,
  products,
  isProductsLoaded,
  setActiveOption,
  display
}) {

  const processingFunction = () => {
    if (!isProductsLoaded) return;
    const filteredProsucts = products.filter((product) => {
      return product.categories.includes(activeOption);
    });
    const idArray = filteredProsucts.map((product) => product.id);
    display(idArray);
  }

  return (
    <PopupMenu
      className='Categories-menu'
      inviteText='Category'
      options={options}
      activeOption={activeOption}
      setActiveOption={setActiveOption}
      processingFunction={processingFunction}
    />
  )
}

CategoriesMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeOption: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProductsLoaded: PropTypes.bool.isRequired,
  setActiveOption: PropTypes.func.isRequired,
  display: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    options: state.filters.productCategories,
    activeOption: state.filters.activeCategory,
    products: state.filters.products,
    isProductsLoaded: state.filters.isProductsLoaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveOption: (optionIndex) => dispatch(setActiveCategory(optionIndex)),
    display: (idArray) => dispatch(setShownProducts(idArray))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);