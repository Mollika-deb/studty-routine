import React, { useEffect, useState } from 'react';
import './Activity.css'
import ActivityCard from './ActivityCard';

const Activity = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])


    const handleCard = () =>{

    }


    return (
        <div className='activity-container lg:ml-32 lg:mr-32 mb-32'>


            <div className='grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
           
            {
                products.map(product => <ActivityCard
                    key={product.id}
                    product = {product}
                    handleCard = {handleCard}
                    ></ActivityCard>)
            }
            </div>

            <div className=''>
            <h1>Cart</h1>
            </div>
    
        </div>
    );
};

export default Activity;