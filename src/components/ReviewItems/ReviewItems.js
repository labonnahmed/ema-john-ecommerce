import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus} from '@fortawesome/free-solid-svg-icons'

const ReviewItems = (props) => {
    console.log(props.product)
    const{name, seller, price, } = props.product
    return (
        <div className="card-body m-5">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><small>By {seller}</small></p>
            <p>${price}</p>
            <button className='btn btn-warning'><FontAwesomeIcon icon={faCircleMinus}></FontAwesomeIcon> Remove to cart</button>
        </div>

    );
};

export default ReviewItems;