import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import classNames from 'classnames';

import { addEntry } from '../redux/slices/cart';

function Pizza( { pizzaItem, types, sizes, cartEntries, addToCart } ) {
    const availableTypes = pizzaItem.availableTypes;
    const availableSizes = pizzaItem.availableSizes;
    const imageUrl = pizzaItem.imageUrl; //no default image bug, need to fix
    const pizzaLabel = pizzaItem.pizzaLabel;
    const prices = pizzaItem.prices;

    const [activeType, setActiveType] = React.useState(availableTypes[0]);
    const [activeSize, setActiveSize] = React.useState(availableSizes[0]);
    const [orderCounter, setOrderCounter] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    }
    
    const onSelectSize = (index) => {
        setActiveSize(index);
    }

    React.useEffect(() => {
        const getOrderCount = () => {
            for (const entry of cartEntries) {
                if (
                    (entry.id === pizzaItem.id) && 
                    (entry.type === activeType) && 
                    (entry.size === activeSize)
                ) {
                    return entry.count;
                }
            };
            return 0;
        }
        setOrderCounter(getOrderCount());
    }, [cartEntries, activeType, activeSize, availableTypes, availableSizes, pizzaItem.id]);

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
                    onClick={() => addToCart(
                        pizzaItem.id, 
                        imageUrl,
                        pizzaLabel,
                        activeType, 
                        activeSize, 
                        prices[activeType][activeSize]
                    )}
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
    pizzaItem: PropTypes.object.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    cartEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
    addToCart: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        types: state.pizzas.types,
        sizes: state.pizzas.sizes,
        cartEntries: state.cart.entries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, imageUrl, label, type, size, price) => {
            dispatch(addEntry({
                id: id, 
                imageUrl: imageUrl,
                label: label,
                type: type, 
                size: size, 
                price: price, 
                count: 1
            }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);