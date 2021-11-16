import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { PopupMenu } from '../';
import { sortBy, shownProductsNotSorted } from '../../redux/slices/filters';


// The SortMenu component is a refinement of the PopupMenu component
// for sorting gallery items.
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// sortOptions: array of strings. The options of sorting and also 
//   the items for PopupMenu component.
// isLoaded: boolean. Logical flag indicating whether data has been loaded 
//   from the server or not.
// isSorted: boolean. Logical flag indicating whether data has been already 
//   sorted or not.
// sort: function(sortOption) where sortOption is string of sortOptions array.
//   It's the function to tell Redux when and how to sort shown gallery items.
// cleanup: function(). Cleanup for PopupMenu component. By default it only
//   says to Redux to change isSorted flag to false.

function SortMenu({ sortOptions, isLoaded, isSorted, sort, cleanup }) {

  const processingFunction = (index) => {
    if (isLoaded && (!isSorted)) sort(sortOptions[index]);
  }

  return (
    <PopupMenu 
      className='sort-menu'
      inviteText='Sort by'
      items={sortOptions}
      processingFunction={processingFunction}
      cleanupFunction={cleanup}
    />
  )
}

SortMenu.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  sort: PropTypes.func.isRequired,
  cleanup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    sortOptions: state.filters.sortOptions,
    isLoaded: state.filters.isProductsLoaded,
    isSorted: state.filters.isSorted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sort: (sortOption) => {
      dispatch(sortBy(sortOption));
    },
    cleanup: () => dispatch(shownProductsNotSorted())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);