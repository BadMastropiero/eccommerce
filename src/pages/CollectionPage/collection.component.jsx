import React from 'react';

// redux
// import { connect } from 'react-redux';
// import { selectCollection } from '../../redux/shop/shop.selectors';

// contextAPI
import CollectionsContext from './../../contexts/collections/collections.context';

// components
import CollectionItem from '../../components/collection-items/collection-item.component';

// styles
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    
    return (
        <CollectionsContext.Consumer>
           {
               collection => {
                   const collections = collection[match.params.collectionId];
                   const { title, items } = collections;
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
           }
        </CollectionsContext.Consumer>
    )
}

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// })

// export default connect(mapStateToProps)(CollectionPage)

export default CollectionPage;
