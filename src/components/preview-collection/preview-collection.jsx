import React from 'react';
import { CollectionItem } from '../collection-item/collection-item';

import './preview-collection.styles.scss';

export const PreviewCollection = ({ title, items }) => ( 
  <div className='preview-collection'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
        {items.filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);
