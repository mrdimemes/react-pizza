import React from 'react';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';

import '../styles/scss/App.scss';

import { Header } from './';
import { MainPage } from '../pages';
import { setItems, setTypes, setSizes, setCategories } from '../redux/slices/pizzas';


function App( {dispatch} ) {

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setCategories(json.pizzaCategories));
        dispatch(setTypes(json.pizzaTypes));
        dispatch(setSizes(json.pizzaSizes));
        dispatch(setItems(json.pizzas));
      });
      // eslint-disable-next-line
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ 
          <MainPage 
            // teporary placeholder
            // categories={["1", "2"]} 
          /> 
        } /> 
      </Routes>
    </div>
  );
}

export default connect()(App);