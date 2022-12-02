import React from 'react';

const Cart = ({cart}) => {
   

    let total =0;
    for(const product of cart){
        total = total + product.time;
    }
    return (
        <div>
            <h2>Study Details</h2>
            <h1>Study Time:{total}m </h1>
            <h1>Break Time: </h1>

        </div>
    );
};

export default Cart;