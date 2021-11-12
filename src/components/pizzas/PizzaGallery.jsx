import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import { Pizza } from '../';

function PizzaGallery( { items, shown } ) {
    return (
        <div className="pizza-gallery">
            {
                shown.map((id) => {
                    const item = items.find(item => item.id === id);
                    return (
                        <Pizza 
                            key={id} 
                            pizzaItem={item}
                        />
                    )
                })
            }
        </div>
    )
}

PizzaGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    shown: PropTypes.arrayOf(PropTypes.number)
};

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        shown: state.pizzas.shownItems
    }
}

export default connect(mapStateToProps)(PizzaGallery)
