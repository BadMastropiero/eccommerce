import React from 'react';

// components
import '../collection-items/collection-item.component';
import CollectionItem from '../collection-items/collection-item.component';

// styles
import './collection-preview.styles.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">  
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(( item ) => (
                        <CollectionItem key={item.id} item={item}  />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
