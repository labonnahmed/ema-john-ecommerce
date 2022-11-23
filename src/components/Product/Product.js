import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, seller, img, price, stock, key} = props.product;
    
    return (
        <div className="card mb-3 product-item">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start p-3" alt="" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link 
                        style={{textDecoration:'none'}} 
                        to={'/product/'+key}
                        >
                            {name}
                        </Link>
                    </h5>
                    <p className="card-text"><small>By {seller}</small></p>
                    <p>${price}</p>
                    <p className="card-text"><small className="text-muted">Only {stock} left in stock - Order soon</small></p>
                    { props.showAddToCart && <button className='btn btn-warning' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;