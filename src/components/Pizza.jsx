import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

function Pizza( {pizzaLabel, imageUrl, types, sizes, availableTypes, availableSizes, prices} ) {
    const [activeType, setActiveType] = React.useState(availableTypes[0]);
    const [activeSize, setActiveSize] = React.useState(availableSizes[0]);
    const [orderCounter, setOrderCounter] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    }
    
    const onSelectSize = (index) => {
        setActiveSize(index);
    }

    const increaseOrderCounter = () => {
        setOrderCounter(orderCounter + 1)
    }

    return (
        <div className="pizza">
            <div className="pizza__image-container">
                <img className="image" src={imageUrl} alt="pizza"></img>
            </div>
            
            <h2 className="pizza__label">{ pizzaLabel }</h2>
            
            <div className="pizza__options">
                <ul className="pizza__options-row">
                    { types.map((item, index) => (
                        <li 
                            key={`${item}_${index}`} 
                            onClick={() => onSelectType(index)}
                            className={classNames(
                                "pizza__options-item",
                                {
                                    "pizza__options-item_active": (index === activeType),
                                    "pizza__options-item_unavailable": (!availableTypes.includes(index))
                                }
                            )
                        }>
                            { item }
                        </li>
                    )) }
                </ul>
                <ul className="pizza__options-row">
                    { sizes.map((item, index) => (
                        <li 
                            key={`${item}_${index}`} 
                            onClick={() => onSelectSize(index)} 
                            className={classNames(
                                "pizza__options-item",
                                {
                                    "pizza__options-item_active": (index === activeSize),
                                    "pizza__options-item_unavailable": (!availableSizes.includes(index))
                                }
                            )
                        }>
                            { item } cm.
                        </li>
                    )) }
                </ul>
            </div>

            <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">{ prices[activeType][activeSize] } $</div>
                <div 
                    className="pizza__order-button button button_shape_rounded button_theme_main-bordered"
                    onClick={increaseOrderCounter}
                >
                    <p className="pizza__order-button-text">+ Add</p>
                    <div 
                        className={classNames(
                            "pizza__order-button-counter",
                            {"pizza__order-button-counter_active": orderCounter}  
                        )}
                    >  
                        { orderCounter }
                    </div>
                </div>
            </div>
        </div>
    )
}

Pizza.defaultProps = {
    imageUrl: "./images/default-pizza-image.svg"
};

Pizza.propTypes = {
    pizzaLabel: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    availableTypes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    availableSizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    prices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default Pizza;