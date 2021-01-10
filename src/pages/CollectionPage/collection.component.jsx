import React, { useContext } from 'react';

// redux
// import { connect } from 'react-redux';
// import { selectCollection } from '../../redux/shop/shop.selectors'

// contextApi
import CollectionsContext from './../../contexts/collections/collections.context';

// components
import CollectionItem from '../../components/collection-items/collection-item.component';

// styles
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'> {title} </h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// })

// export default connect(mapStateToProps)(CollectionPage)

 export default CollectionPage;