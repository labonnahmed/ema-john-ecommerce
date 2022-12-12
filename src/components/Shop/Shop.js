import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10= fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart= getDatabaseCart();
        const productKeys= Object.keys(savedCart);
        console.log(productKeys);
        const cartProducts= productKeys.map(key => {
            const product= fakeData.find( pd => pd.key === key);
            product.quentity= savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, []);

    function handleAddProduct(product){
        // For update quentity
        const sameProduct= cart.find( pd => pd.key === product.key);
        let count= 1;
        let newCount;

        if(sameProduct){
            count = product.quentity + 1;
            product.quentity = count;
            const otherProducts = cart.filter( pd => pd.key !== product.key);
            newCount= [...otherProducts, sameProduct]
        }
        else{
            product.quentity= 1;
            newCount= [...cart, product];
        }
        setCart(newCount);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className=' container shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        showAddToCart= {true}
                        >    
                        </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='btn btn-warning'>Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;