import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const first10= fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([])
    function handleAddProduct(product){
        const newCount= [...cart , product]
        setCart(newCount)

        const sameProducts= newCount.filter( pd => pd.key === product.key);
        const count= sameProducts.length;
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;