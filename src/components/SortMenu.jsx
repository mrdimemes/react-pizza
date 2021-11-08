import React from 'react'

import { connect } from 'react-redux';

import { PopupMenu } from './';
import { sortBy } from '../redux/slices/pizzas';


function SortMenu({ sortOptions, sort }) {
    const processingFunction = (index) => {
        sort(sortOptions[index]);
    }

    return (
        <PopupMenu 
            className="sort-menu"
            inviteText="Sort by"
            items={sortOptions} 
            processingFunction={processingFunction}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        sortOptions: state.pizzas.sortOptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (sortOption) => dispatch(sortBy(sortOption))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)