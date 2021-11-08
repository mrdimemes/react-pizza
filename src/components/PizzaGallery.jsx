import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import { Pizza } from '../components/';

function PizzaGallery( { items, shown, types, sizes } ) {
    return (
        <div className="pizza-gallery">
            {
                shown.map((id) => {
                    const item = items.find(item => item.id === id);
                    return (
                        <Pizza 
                            key={id} 
                            types={types} 
                            sizes={sizes} 
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}

PizzaGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        types: state.pizzas.types,
        sizes: state.pizzas.sizes,
        shown: state.pizzas.shownItems
    }
}

export default connect(mapStateToProps)(PizzaGallery)
