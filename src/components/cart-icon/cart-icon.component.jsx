import React from 'react';

// redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// icons
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// styles
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
