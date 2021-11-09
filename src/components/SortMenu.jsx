import React from 'react'

import { connect } from 'react-redux';

import { PopupMenu } from './';
import { sortBy, itemsNotSorted } from '../redux/slices/pizzas';


function SortMenu({ sortOptions, isLoaded, isSorted, sort, cleanup }) {
    const processingFunction = (index) => {
        if (isLoaded && (!isSorted)) {
            sort(sortOptions[index])
        }
    }

    return (
        <PopupMenu 
            className="sort-menu"
            inviteText="Sort by"
            items={sortOptions} 
            processingFunction={processingFunction} 
            cleanupFunction={cleanup}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        sortOptions: state.pizzas.sortOptions,
        isLoaded: state.pizzas.isLoaded,
        isSorted: state.pizzas.isSorted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (sortOption) => {
            dispatch(sortBy(sortOption));
        },
        cleanup: () => dispatch(itemsNotSorted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)