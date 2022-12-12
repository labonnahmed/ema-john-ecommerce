import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const total= props.cart.reduce((sumTotal, product) => sumTotal + product.price * product.quentity ,0);

    let shipping= 0;
    if(total > 500){
        shipping = 0
    }
    else if( total > 150){
        shipping= 4.99
    }
    else if( total > 0){
        shipping= 12.99
    }

    const tax= total/ 10

    const formatNumber = num => {
        const precison= num.toFixed(2);
        return Number(precison);
    }

    const grandTotal = total + shipping + tax;

    return (
       <div className='cart-style py-3'>
            <h4 style={{textAlign: 'center'}}>Order summary</h4>
            <br />
            <h6><small className="text-muted">You have {props.cart.length} item in your cart.</small></h6>
            <br />
            <p>Product price: ${formatNumber(total)}</p>
            <p><small>Shipping cost: ${shipping}</small></p>
            <p><small>Tax + VAT: ${formatNumber(tax)}</small></p>
            <h5 className='text-danger'>Total Price: ${formatNumber(grandTotal)}</h5>
            {
                props.children
            }
       </div>
    );
};

export default Cart;