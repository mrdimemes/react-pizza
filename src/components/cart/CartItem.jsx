import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button } from '../';
import {
  addEntry,
  removeEntry,
  removeAllEntries
} from '../../redux/slices/cart';

import '../../styles/scss/components/cart/CartItem.scss';


// Component for cart entry representation.
//
// Need direct determination of "entry" prop.
// All other props comes from Redux storage, 
// direct determination of them isn't necessary.
//
// Component props:
//
// entry: object. Signature: {
//   id: integer > 0 - identificator of product in Redux storage,
//   imageUrl: string or undefined - path to the item image
//     (if undefined will be used the default image),
//   label: string - product name,
//   type: integer >= 0 - index of product type in Redux storage,
//   size: integer >= 0 - index of product size in Redux storage,
//   count: integer > 0 - number of same products in the cart
// }
// availableTypes: array of strings (availableTypes.length > 0) -
//   available product types from Redux storage.
// availableSizes: array of numbers (availableSizes.length > 0) -
//   available product sizes from Redux storage.
// add: function(entry) to add one more entry (of rendered by that component)
//   into the cart.
// remove: function(entry) to remove one entry (of rendered by that component)
//   from the cart. If there is no more of rendered entry in the cart, 
//   this CartItem component should be removed too.
// removeAll: function(entry) to remove all entries (of rendered by that
//   component) from the cart. As a result, an empty CartItem component 
//   should also be removed.

function CartItem(
    { entry, availableTypes, availableSizes, add, remove, removeAll }
  ) {

  return (
    <div className='Cart__item Cart-item'>

      <div className='Cart-item__info'>
        <div className='Cart-item__image-container'>
          <img className='image' src={entry.imageUrl} alt='pizza' />
        </div>
        <div className='Cart-item__text'>
          <h3 className='Cart-item__label'>{ entry.label }</h3>
          <p className='Cart-item__description'>
            <span>{ availableTypes[entry.type] } dough, </span>
            <span>{ availableSizes[entry.size] } cm.</span>
          </p>
        </div>
      </div>

      <div className='Cart-item__interactive-bar'>
        <div className='Cart-item__counter'>
          <Button 
            className='Cart-item__counter-button'
            theme='main-bordered'
            onClick={() => remove(entry)}
            children='-'
          />
          <p className='Cart-item__counter-state'>{ entry.count }</p>
          <Button
            className='Cart-item__counter-button'
            theme='main-bordered'
            onClick={() => add(entry)}
            children='+'
          />
        </div>

        <div className='Cart-item__price'>
          { (entry.price * entry.count).toFixed(2) } $
        </div>
        <Button
          className='Cart-item__clear-button'
          theme='weak-bordered'
          onClick={() => removeAll(entry)}
          children='×'
        />
      </div>
    </div>
  )
}

CartItem.defaultProps = {
  imageUrl: './images/default-pizza-image.svg',
};

CartItem.propTypes = {
  entry: PropTypes.object.isRequired,
  availableTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  availableSizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    availableTypes: state.filters.types,
    availableSizes: state.filters.sizes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (entry) => {
      dispatch(addEntry({...entry}));
    },
    remove: (entry) => {
      dispatch(removeEntry({...entry}));
    },
    removeAll: (entry) => {
      dispatch(removeAllEntries({...entry}));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
