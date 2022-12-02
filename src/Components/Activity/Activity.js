import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/Storage';
import Cart from '../Cart/Cart';
import Profle from '../Profile/Profle';
import './Activity.css'
import ActivityCard from './ActivityCard';


const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

     useEffect(() =>{
         const storedCart = getStoredCart();
         console.log(storedCart);
        const savedcart = [];
        for(const id in storedCart){
            const addedeActivity = products.find(product=> product.id === id);
           
           if(addedeActivity){
             const quantity = storedCart[id];
            addedeActivity.quantity = quantity;
             savedcart.push(addedeActivity);
            
           }
        }
        setCart(savedcart);
     }, [products])


    const handleCard = (product) =>{
        console.log(product);
        let newCart = [];
        const exists = cart.find(activity => activity.id === product.id);
        if(!exists){

            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(activity => activity.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(product.id)

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

            <div className='ml-10 rounded-xl shadow-2xl bg-rose-300 h-1/2 sticky top-0'>
            

            <div className='mb-32'>
                    <Profle></Profle>
            </div>
            <Cart cart={cart}></Cart>
            </div>
    
        </div>
    );
};

export default Activity;