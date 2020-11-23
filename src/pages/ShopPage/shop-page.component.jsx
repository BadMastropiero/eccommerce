import React from 'react';

// redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

// components
import PreviewCollection from '../../components/preview-collection.component/preview-collection.component';

const ShopPage = ({ collections }) => {
    return (
      <div className="shop-page">
          {
              collections.map(({id, ...otherCollectionProps}) => (
                  <PreviewCollection key={id} {...otherCollectionProps}  />
              ))
          }
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
