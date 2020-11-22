import React from 'react';
import {Link} from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Firebase
import {auth} from '../../firebase/firebase.utils';

// styles
import './header.styles.scss';
import {ReactComponent as Logo} from  '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='options' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser
                        ? <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> 
                        : <Link className='option' to='/signin'> SIGN IN </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : 
                <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);