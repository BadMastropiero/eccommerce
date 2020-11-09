import React from 'react';

// styles
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
       <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >  
        {children}
       </button>
    )
}

export default CustomButton
