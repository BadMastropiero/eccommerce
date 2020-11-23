import React from 'react';

// redux
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// components
import MenuItem from '../../components/MenuItem/menu-item.component.jsx';

// styles
import './directory.styles.scss';

const Directory = ({ sections }) => {
        return (
            <div className="directory-menu">
                {
                    // this.state.sections.map(({title, imageUrl, id, linkUrl, size}) => (
                    //     <MenuItem key={id} title={title} image={imageUrl} size={size} linkUrl={linkUrl}  />
                    // ))
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}  />
                    ))
                }
            </div>
        )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
