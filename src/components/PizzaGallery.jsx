import React from 'react';
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

export default PizzaGallery
