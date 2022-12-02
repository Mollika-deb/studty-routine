import React from 'react';

const Cart = ({cart}) => {
   

    console.log(cart);
   

    let total = 0;
    for(const product of cart){
        total = parseFloat(total) + parseFloat(product.time);
    }
  
    return (
        <div>
            <p>selected item : {cart.length}</p>
            <h2>Study Details</h2>
            <h1>Study Time:{total}m </h1>
            <h1>Break Time: </h1>

        </div>
    );
};

export default Cart;