import '../styles/scss/App.scss'

import { Header } from './';
import { MainPage } from '../pages';
import { Route } from 'react-router';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={MainPage} /> 
    </div>
  );
}

export default App;