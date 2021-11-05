import React from 'react';
import PropTypes from 'prop-types';

import { Pizza } from '../components/';

function PizzaGallery( { pizzas, pizzaTypes, pizzaSizes } ) {
    return (
        <div className="pizza-gallery">
            { pizzas.map((pizza) => (
                <Pizza 
                    key={pizza.id} 
                    types={pizzaTypes} 
                    sizes={pizzaSizes} 
                    {...pizza} 
                />
            )) }
        </div>
    )
}

PizzaGallery.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object),
    pizzaTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pizzaSizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default PizzaGallery
