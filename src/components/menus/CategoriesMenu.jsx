import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { PopupMenu } from '../';
import { setShownItems, itemsNotSorted } from '../../redux/slices/pizzas';

import '../../styles/scss/components/CategoriesMenu.scss';


// The CategoriesMenu component is a refinement of the PopupMenu component
// for showing gallery items by them category.
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
//
// categories: array of strings. The categories of products and also 
//   the items for PopupMenu component.
// isLoaded: boolean. Logical flag indicating whether data has been loaded 
//   from the server or not.
// display: function(idArray) where idArray is an array of products
//   identificators. It's the function to tell Redux what products
//   should appear in the gallery.
// cleanup: function(). Cleanup for PopupMenu component. By default it only
//   says to Redux to change isSorted flag to false.

function CategoriesMenu({ categories, items, isLoaded, display, cleanup }) {
  const processingFunction = (categoryIndex) => {
    if (isLoaded) {
      const filteredItems = items.filter((item) => {
        return item.categories.includes(categoryIndex);
      });
      const filteredIds = filteredItems.map((item) => item.id);
      display(filteredIds);
    }
  }

    return (
        <PopupMenu
            className='Categories-menu'
            inviteText='Category'
            items={categories}
            processingFunction={processingFunction}
            cleanupFunction={cleanup}
        />
    )
}

CategoriesMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {
      categories: state.pizzas.categories,
      items: state.pizzas.items,
      isLoaded: state.pizzas.isLoaded,
      display: PropTypes.func,
      cleanup: PropTypes.func
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        display: (idArray) => dispatch(setShownItems(idArray)),
        cleanup: () => dispatch(itemsNotSorted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);