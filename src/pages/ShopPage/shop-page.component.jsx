import React from 'react';
import {Route} from 'react-router-dom';

// pages
import CollectionPage from  '../CollectionPage/collection.component';

// components
import CollectionOverview from '../../components/collections-overview/collection-overview.component';

const ShopPage = ({ match }) => {
    return (
      <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
}

export default ShopPage;
