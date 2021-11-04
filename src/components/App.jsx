import React from 'react';
import { Routes, Route } from "react-router-dom";

import '../styles/scss/App.scss';

import { Header } from './';
import { MainPage } from '../pages';


function App() {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const [pizzaTypes, setPizzaTypes] = React.useState([]);
  const [pizzaSizes, setPizzaSizes] = React.useState([]);
  const [pizzaCategories, setPizzaCategories] = React.useState([]);



  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((json) => {
        setPizzaCategories(json.pizzaCategories);
        setPizzaTypes(json.pizzaTypes);
        setPizzaSizes(json.pizzaSizes);
        setPizzasArray(json.pizzas);
      });
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ 
          <MainPage 
            categories={pizzaCategories} 
            pizzaSizes={pizzaSizes}
            pizzaTypes={pizzaTypes}
            pizzas={pizzasArray}
          /> 
        } /> 
      </Routes>
    </div>
  );
}

export default App;