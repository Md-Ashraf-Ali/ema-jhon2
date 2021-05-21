import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props);
    // const total = cart.reduce ((total, product)=> total+product.price, 0)
    let total = 0;
    for (let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    
    let shipping = 0;
    if (total>35){
        shipping = 0;
    }
    else if (total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }

    const tex = (total / 10).toFixed(2);
    const grandtotal = (total + shipping + Number(tex)).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    
    return (
        <div>
            <h1>This is Cart</h1>
            <h3>Order summery: {cart.length}</h3>
            <h3>Shipping Cost: {shipping}</h3>
            <h3>Product Price: {formatNumber(total)}</h3> 
            <h3>Tex: {tex}</h3>
            <h3>Total Price: {grandtotal}</h3>
        </div>
    );
};

export default Cart;