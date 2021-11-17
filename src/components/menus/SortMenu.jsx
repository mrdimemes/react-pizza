import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { PopupMenu } from '../';
import {
  setActiveSortOption,
  sortShownProducts
} from '../../redux/slices/filters';


// The SortMenu component is a refinement of the PopupMenu component
// for sorting shownProducts (in Redux).
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// options: array of strings. Options prop for PopupMenu component.
//   In case of SortMenu, options are product sort options.
// activeOption: integer >= 0. Index of the options.
// setActiveOption: function(optionIndex).
// isProductsLoaded: boolean. Logical flag indicating whether data
//   has been loaded from the server or not.
// isShownProductsSorted: boolean. Logical flag indicating whether data
//   has been already sorted or not.
// sort: function() Function to sort shownProducts state of
//   Redux filters store by activeSortOption state.

function SortMenu({
  options,
  activeOption,
  isProductsLoaded,
  isShownProductsSorted,
  setActiveOption,
  sort
}) {

  const processingFunction = () => {
    if (isProductsLoaded && (!isShownProductsSorted)) sort();
  }

  return (
    <PopupMenu 
      className='Sort-menu'
      inviteText='Sort by'
      options={options}
      activeOption={activeOption}
      setActiveOption={setActiveOption}
      processingFunction={processingFunction}
    />
  )
}

SortMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeOption: PropTypes.number.isRequired,
  isProductsLoaded: PropTypes.bool.isRequired,
  isShownProductsSorted: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => {
  return {
    options: state.filters.sortOptions,
    activeOption: state.filters.activeSortOption,
    isProductsLoaded: state.filters.isProductsLoaded,
    isShownProductsSorted: state.filters.isShownProductsSorted,
    setActiveOption: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveOption: (optionIndex) => {
      dispatch(setActiveSortOption(optionIndex));
    },
    sort: () => {
      dispatch(sortShownProducts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);