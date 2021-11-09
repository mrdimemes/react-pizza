import React from 'react'

import { connect } from 'react-redux';

import { PopupMenu } from './';
import { setShownItems, itemsNotSorted } from '../redux/slices/pizzas';


function CategoriesMenu({ categories, isLoaded, items, display, cleanup }) {
    const processingFunction = (categoryIndex) => {
        if (isLoaded) {
            const filteredItems = items.filter(item => item.categories.includes(categoryIndex));
            const filteredIds = filteredItems.map((item) => item.id);
            display(filteredIds);
        }
    }

    return (
        <PopupMenu 
            className="categories-menu"
            inviteText="Category"
            items={categories} 
            processingFunction={processingFunction} 
            cleanupFunction={cleanup}
        />
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.pizzas.categories,
      items: state.pizzas.items,
      isLoaded: state.pizzas.isLoaded,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        display: (idArray) => dispatch(setShownItems(idArray)),
        cleanup: () => dispatch(itemsNotSorted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu)