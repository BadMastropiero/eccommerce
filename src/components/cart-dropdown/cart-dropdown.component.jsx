import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>

            </div>

            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )
}

export default CartDropdown
