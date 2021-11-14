import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import classNames from 'classnames';

import { Button } from '../';
import { addEntry } from '../../redux/slices/cart';


// Component for single product representation.
// Will be mounted into PizzaGallery component.
//
// Need direct determination of "pizzaItem" prop.
// All other props comes from Redux storage, 
// direct determination of them isn't necessary.
//
// Component props:
//
// pizzaItem: object. Signature: {
//   availableTypes: non empty array of integers >= 0 - contain indexes of
//     avaiable types for a specific product.
//     All types of products are listed in Redux.
//   availableSizes: non empty array of integers >= 0 - contain indexes of
//     avaiable sizes for a specific product.
//     All sizes of products are listed in Redux.
//   imageUrl: string or undefined - path to the product image. If undefined,
//     will be replaced by default value.
//   pizzaLabel: string - product name.
//   prices: array of arrays of numbers - the matrix of prices for 
//     any product configuration (price = prices[type][size]).
// }
// types: non empty array of strings - all product types from Redux.
// sizes: non empty array of numbers - all product sizes from Redux.
// cartEntries: array of objects representing cart entries.
//   Entry signature: {
//     id: integer > 0 - product identificator.
//     imageUrl: string or undefined - path to the product image.
//     label: string - product name.
//     type: integer > 0 - index of types array of Redux store (pizzas slice).
//     size: integer > 0 - index of sizes array of Redux store (pizzas slice).
//     price: number > 0 - product price for selected configuration.
//     count: integer > 0 - number of products the with same configuration
//       in the cart.
//   }
// addToCart: function(id, imageUrl, label, type, size, price)
//   where arguments are an entry properties (see signature upper).
//   Addes entry to cart. Сount property will allways be 1.

function Pizza({ pizzaItem, types, sizes, cartEntries, addToCart }) {

  // pizzaItem variables
  const availableTypes = pizzaItem.availableTypes;
  const availableSizes = pizzaItem.availableSizes;
  const imageUrl = (
    pizzaItem.imageUrl ? pizzaItem.imageUrl: (
      '../../assect/images/svg/default-pizza-image.svg'
  ));
  const pizzaLabel = pizzaItem.pizzaLabel;
  const prices = pizzaItem.prices;

  // states
  const [activeType, setActiveType] = React.useState(availableTypes[0]);
  const [activeSize, setActiveSize] = React.useState(availableSizes[0]);
  const [orderCounter, setOrderCounter] = React.useState(0);

  const onSelectType = (index) => setActiveType(index);
  const onSelectSize = (index) => setActiveSize(index);

  // order button counter rendering effect
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
  }, [
    cartEntries,
    activeType,
    activeSize,
    availableTypes,
    availableSizes,
    pizzaItem.id
  ]);

  return (
    <div className='pizza'>
      <div className='pizza__image-container'>
        <img className='image' src={imageUrl} alt='pizza' />
      </div>

      <h2 className='pizza__label'> {pizzaLabel} </h2>
        
      <div className='pizza__options'>
        <ul className='pizza__options-row'>
          { types.map((item, index) => (
            <li
              key={ `${item}_${index}` }
              onClick={ () => onSelectType(index) }
              className={classNames(
                'pizza__options-item',
                {'pizza__options-item_active': (index === activeType),
                'pizza__options-item_unavailable': (
                  !availableTypes.includes(index))}
              )}
            >
              { item }
            </li>
          )) }
        </ul>

        <ul className='pizza__options-row'>
          { sizes.map((item, index) => (
            <li
              key={ `${item}_${index}` }
              onClick={ () => onSelectSize(index) }
              className={classNames(
                'pizza__options-item',
                {'pizza__options-item_active': (index === activeSize),
                'pizza__options-item_unavailable': (
                  !availableSizes.includes(index))}
              )}
            >
              { item } cm.
            </li>
          )) }
        </ul>
      </div>

      <div className='pizza__order-bar interactive-bar'>
        <div className='pizza__price'>
          { prices[activeType][activeSize] } $
        </div>

        <Button
          className='pizza__order-button'
          shape='rounded'
          theme='main-bordered'
          onClick={ () => addToCart(
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
              'pizza__order-button-counter',
              {'pizza__order-button-counter_active': orderCounter}
            )}
          >
            { orderCounter }
          </div>
        </Button>
      </div>
    </div>
  )
}

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
      dispatch( addEntry( {
        id: id,
        imageUrl: imageUrl,
        label: label,
        type: type,
        size: size,
        price: price,
        count: 1
      } ) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);