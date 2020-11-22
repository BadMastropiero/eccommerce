import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

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
	unsubscribeFromAuth = null;

	componentDidMount() {
		const {setCurrentUser} = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);

			userRef.onSnapshot(snapShot => {
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data()
				})
			})
		} else { 
			setCurrentUser(userAuth);
		}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
		<div className="App">
			<Header/>
			<Switch>
			<Route exact path ='/' component={HomePage} />
			<Route exact path='/shop' component={ShopPage} />
			<Route path='/signin' component={SignInAndSignUpPage} />
			</Switch>
		</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
