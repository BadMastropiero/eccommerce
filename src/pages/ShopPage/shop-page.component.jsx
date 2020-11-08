import React, { Component } from 'react';

// components
import PreviewCollection from '../../components/preview-collection.component/preview-collection.component';

// dummy data
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
    const {collections} = this.state
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
}

export default ShopPage;
