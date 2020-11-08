import React from 'react';

// components
import Directory from '../../components/directory/directory.components';

// styles
import './homepage.styles.scss';



const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
               <Directory />
            </div>
        </div>
    )
}

export default HomePage
