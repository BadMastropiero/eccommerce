import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// pages
import HomePage from './pages/HomePage/homepage.components';
import ShopPage from './pages/ShopPage/shop-page.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/sign-in-and-sign-up-page';

// components
import Header from './components/header/header.component';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// styles
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state);
        });
       
      } else { 
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path ='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
 
}

export default App;
