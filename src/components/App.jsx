import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './';
import { MainPage, CartPage } from '../pages';

import {
  setProducts,
  setProductTypes,
  setProductSizes,
  setProductCategories,
  productsLoaded
} from '../redux/slices/filters';

import '../styles/scss/components/App.scss';


function App({ dispatch }) {

  /* Data loading on mount */
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch(setProductCategories(json.pizzaCategories));
        dispatch(setProductTypes(json.pizzaTypes));
        dispatch(setProductSizes(json.pizzaSizes));
        dispatch(setProducts(json.pizzas));
        dispatch(productsLoaded());
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