import React from 'react'

import { connect } from 'react-redux';

import { PopupMenu } from './';
import { sortBy } from '../redux/slices/pizzas';


function SortMenu({ sortItems, sort }) {
    const processingFunction = (index) => {
        sort(sortItems[index]);
    }

    return (
        <PopupMenu 
            className="sort-menu"
            inviteText="Sort by"
            items={sortItems} 
            processingFunction={processingFunction}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        sortItems: state.pizzas.sortItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (sortItem) => dispatch(sortBy(sortItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)