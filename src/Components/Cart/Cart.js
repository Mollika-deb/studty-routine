import React from 'react';

const Cart = ({cart}) => {
   

    console.log(cart);
   

    let total = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = parseFloat(total) + parseFloat(product.time) * product.quantity;
    }
  
    return (
        <div>
            <p>selected item : {quantity}</p>
            <h2>Study Details</h2>
            <h1>Study Time:{total}m </h1>
            <h1>Break Time: </h1>

        </div>
    );
};

export default Cart;