import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart= getDatabaseCart();
        const productKey= Object.keys(savedCart);
        const cartProducts= productKey.map( key => {
            const product= fakeData.find( pd => pd.key === key);
            product.quentity= savedCart[key];
            return product;
        });
        setCart(cartProducts)
    },[]);
    console.log(cart)

    return (
        <div>
            {
                cart.map(product => <ReviewItems
                    product={product} 
                    key={product.key}
                    >
                    </ReviewItems>)
            }
        </div>
    );
};

export default Review;