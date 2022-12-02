import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Activity.css'
import ActivityCard from './ActivityCard';

const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])


    const handleCard = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <div className='activity-container lg:ml-32 lg:mr-24 mb-32'>


            <div className='mr-15 grid gap-x-8 gap-y-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
           
            {
                products.map(product => <ActivityCard
                    key={product.id}
                    product = {product}
                    handleCard = {handleCard}
                    ></ActivityCard>)
            }
            </div>

            <div className='ml-10 rounded-xl 
            shadow-2xl bg-pink-300 h-1/2'>
            <Cart cart={cart}></Cart>
            </div>
    
        </div>
    );
};

export default Activity;