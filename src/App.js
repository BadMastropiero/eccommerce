import React from 'react';
import {Switch, Route} from 'react-router-dom';



// pages
import HomePage from './pages/HomePage/homepage.components.jsx';

// styles
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>
        Hats page
      </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
