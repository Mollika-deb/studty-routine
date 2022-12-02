import React from 'react';
import toast from 'react-hot-toast';

const Cart = ({cart, breakCart}) => {


    const handleToast = () =>{
        toast.success('Activity completed')
    }

   

    console.log(cart);
   

    let total = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = parseFloat(total) + parseFloat(product.time) * product.quantity;
    }

    let breakTotal = 0;
    for(const addBreak of breakCart){
        breakTotal = parseFloat(breakTotal) + parseFloat(addBreak.break_time)
    }

   

  
    return (
        <div>
          
            <h2 className='text-1xl font-bold bg-slate-300 rounded-xl shadow-2xl mx-3  p-2'>Study Details : </h2>
            <h1 className='text-1xl font-bold mt-3 bg-slate-300 p-2 mx-3 rounded-2xl shadow-2xl p-4'>Study Time:{total}m </h1>
            <h1 className='text-1xl font-bold mt-3 bg-slate-300 p-2 mx-3 rounded-2xl shadow-2xl p-4'>Break Time: {breakTotal}m</h1>
            <button onClick={handleToast} className='text-1xl  font-bold mt-3 bg-slate-400 px-14 mx-3 rounded-2xl shadow-2xl p-4'>Activity completed</button>

        </div>
    );
};

export default Cart;