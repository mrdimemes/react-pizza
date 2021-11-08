import React from 'react'

import { connect } from 'react-redux';

import { PopupMenu } from './';
import { setShownItems } from '../redux/slices/pizzas';


function CategoriesMenu({ categories, items, display }) {
    const processingFunction = (categoryIndex) => {
        const filteredItems = items.filter(item => item.categories.includes(categoryIndex));
        const filteredIds = filteredItems.map((item) => item.id);
        display(filteredIds);
    }

    return (
        <PopupMenu 
            className="categories-menu"
            inviteText="Category"
            items={categories} 
            processingFunction={processingFunction}
        />
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.pizzas.categories,
      items: state.pizzas.items
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        display: (idArray) => dispatch(setShownItems(idArray))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu)