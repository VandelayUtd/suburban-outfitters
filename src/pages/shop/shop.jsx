import React, { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss'

const Shop = () => {

    const { categoriesMap } = useContext(CategoriesContext)

    return ( 
        <div className='shop-container'>
        {
        Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return (
                <CategoryPreview title={title} products={products}/>
            )
        }) 
        }
        </div>
    )
}

export default Shop;
