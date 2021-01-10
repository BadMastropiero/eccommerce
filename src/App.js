import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// redux
// import {connect} from 'react-redux';
// import { setCurrentUser } from './redux/user/user.action';
// import { createStructuredSelector } from 'reselect';
// import { selectCurrentUser } from './redux/user/user.selector';

// pages
import HomePage from './pages/HomePage/homepage.components';
import ShopPage from './pages/ShopPage/shop-page.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/sign-in-and-sign-up-page';
import CheckoutPage from './pages/CheckoutPage/checkout.component';

// context
import CurrentUserContext from './contexts/current-user/current-user.context';


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
	unsubscribeFromAuth = null;

	componentDidMount() {
		
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);

			userRef.onSnapshot(snapShot => {
				this.setState({currentUser: {
					id: snapShot.id,
					...snapShot.data()
				}})
			})
		} else { 
			this.setCurrentUser({ currentUser: userAuth});
		}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
		<div className="App">
			<CurrentUserContext.Provider value={this.state.currentUser}>
				<Header/>
			</CurrentUserContext.Provider>
			<Switch>
			<Route exact path ='/' component={HomePage} />
			<Route path='/shop' component={ShopPage} />
			<Route exact path='/checkout' component={CheckoutPage} />
			<Route 
				exact 
				path='/signin' 
				render = {() => 
					this.state.currentUser ? (
						<Redirect to='/' />
					) : (
						<SignInAndSignUpPage />
					)
				} 
			/>
			</Switch>
		</div>
		);
	}
}

// const mapStateToProps =  createStructuredSelector({
// 	currentUser: selectCurrentUser
// })

// const mapDispatchToProps = dispatch => ({
// 	setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
