import React from 'react';
import { Pizza } from '../components/';

function PizzaGallery( { pizzas, pizzaTypes, pizzaSizes } ) {
    return (
        <div className="pizza-gallery">
            { pizzas.map((pizza) => (
                <Pizza 
                    key={pizza.id} 
                    pizzaLabel={pizza.pizzaLabel}
                    pizzaImageUrl={pizza.imageUrl} 
                    types={pizzaTypes} 
                    sizes={pizzaSizes} 
                    availableTypes={pizza.availableTypes}
                    availableSizes={pizza.availableSizes} 
                    prices={pizza.prices} 
                />
            )) }
        </div>
    )
}

export default PizzaGallery
