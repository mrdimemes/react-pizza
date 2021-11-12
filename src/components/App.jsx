import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './';
import { MainPage, CartPage } from '../pages';

import {
  setItems,
  setTypes,
  setSizes,
  setCategories,
  itemsLoaded
} from '../redux/slices/pizzas';

import '../styles/scss/App.scss';


function App({ dispatch }) {

  /* Data loading on mount */
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch(setCategories(json.pizzaCategories));
        dispatch(setTypes(json.pizzaTypes));
        dispatch(setSizes(json.pizzaSizes));
        dispatch(setItems(json.pizzas));
        dispatch(itemsLoaded());
      });
      // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={ <MainPage /> } />
        <Route exact path='/cart' element={ <CartPage /> } />
      </Routes>
    </div>
  );
}

export default connect()(App);