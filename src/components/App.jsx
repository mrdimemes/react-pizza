import React from 'react';
import { Route } from 'react-router';

import '../styles/scss/App.scss';

import { Header } from './';
import { MainPage } from '../pages';


function App() {
  const [pizzasArray, setPizzasArray] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((json) => setPizzasArray(json.pizzas));
  }, []);


  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={MainPage} /> 
    </div>
  );
}

export default App;