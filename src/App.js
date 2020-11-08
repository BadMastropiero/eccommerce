import React from 'react';
import {Switch, Route} from 'react-router-dom';



// pages
import HomePage from './pages/HomePage/homepage.components';
import ShopPage from './pages/ShopPage/shop-page.component';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
