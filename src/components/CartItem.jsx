import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '../components'
import { addEntry, removeEntry, removeAllEntries } from '../redux/slices/cart';


function CartItem({ entry, availableTypes, availableSizes, add, remove, removeAll }) {
  return (
    <div className="Cart__item Cart-item">
      <div className="Cart-item__info">
        <div className="Cart-item__image-container">
          <img className="image" src={entry.imageUrl} alt="pizza" />
        </div>
        <div className="Cart-item__text">
          <h3 className="Cart-item__label">{ entry.label }</h3>
          <p className="Cart-item__description">
            { availableTypes[entry.type] } dough, { availableSizes[entry.size] } cm.
          </p>
        </div>
      </div>

      <div className="Cart-item__interactive-bar">
        <div className="Cart-item__counter">
          <Button 
            className="Cart-item__decrease-button" 
            theme="main-bordered" 
            onClick={() => remove(entry)}
            children="-" 
          />
          <p className="Cart-item__counter-state">{ entry.count }</p>
          <Button 
            className="Cart-item__encrease-button" 
            theme="main-bordered" 
            onClick={() => add(entry)}
            children="+" 
          />
        </div>

        <div className="Cart-item__price">{ (entry.price * entry.count).toFixed(2) } $</div>
        <Button 
          className="Cart-item__clear-button" 
          theme="weak-bordered" 
          onClick={() => removeAll(entry)} 
          children="×" 
        />
      </div>
    </div>
  )
}

CartItem.defaultProps = {
  imageUrl: "./images/default-pizza-image.svg",
};

CartItem.propTypes = {
  entry: PropTypes.object.isRequired,
  availableTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  availableSizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const mapStateToProps = (state) => {
  return {
    availableTypes: state.pizzas.types,
    availableSizes: state.pizzas.sizes,
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
