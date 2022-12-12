import React, { useEffect, useState, useContext } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const Review = () => {
    const[loggedInUser] = useContext(userContext);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const proceedCheckout= () => {
        navigate('/shipment')
    }

    const  handleRemoveProduct= (productKey) => {
        const newCart= cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart= getDatabaseCart();
        const productKeys= Object.keys(savedCart);
        const cartProducts= productKeys.map( key => {
            const product= fakeData.find( pd => pd.key === key);
            product.quentity= savedCart[key];
            return product;
        });
        setCart(cartProducts)
    },[]);

    return (
        <div className=' container shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItems
                        handleRemoveProduct= {handleRemoveProduct}
                        product={product} 
                        key={product.key}
                        >
                        </ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={proceedCheckout} className='btn btn-warning'>proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;