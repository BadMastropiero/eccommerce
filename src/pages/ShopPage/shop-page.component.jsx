import React from 'react';

// components
import CollectionOverview from '../../components/collections-overview/collection-overview.component';

const ShopPage = ({ collections }) => {
    return (
      <div className="shop-page">
          <CollectionOverview />
      </div>
    );
}

export default ShopPage;
