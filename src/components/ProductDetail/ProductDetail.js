import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const products= fakeData.find( pd => productKey === pd.key)

    return (
        <div>
            <h4 style={{textAlign:'center'}} className='p-2'>Your product details</h4>
            <Product 
            product={products}
            showAddToCart= {false}
            >
            </Product>
        </div>
    );
};

export default ProductDetail;