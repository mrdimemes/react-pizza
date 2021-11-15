import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Pizza } from '../';

import '../../styles/scss/components/PizzaGallery.scss';


// Component for pizzas representation.
// Only shown items will be rendered. Shown items stores in Redax
// as a separate array (see props).
// The recommended way to change the displayed items is
// to use the CategoriesMenu component.
// Every pizza rendered as Pizza component.
//
// All props comes from Redux storage.
// Direct determination of component's props isn't necessary.
//
// Component props:
// 
// items: array of objects - list of the products from the Redux store.
//   Contains all pizzas loaded from the server.
//   See Pizza component for pizza object signature.
// shown: array of integers >= 0 - list of products identificators.
//   PizzaGallery will render only pizzas
//   whose id's are stored in the shown array.

function PizzaGallery( { items, shown } ) {
  return (
    <div className='Pizza-gallery'>
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

export default connect(mapStateToProps)(PizzaGallery);