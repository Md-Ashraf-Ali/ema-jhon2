import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const product = props.product;
    const handleAddProduct = props.handleAddProduct;
    const {name, img, description, price,seller,stock} = product;
    return (
        <div className="product">
            <div className = "product-img">
                <img src={img} alt="" />
            </div>
            <div className = "product-details">
                <h3>{name}</h3>
                <p><small>By: {seller}</small></p>
                <p><small>Only {stock} pcs left in stock-Order Soon</small></p>
                <h4>Price : ${price}</h4>
                <button className="btn " onClick = {()=>handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;