import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/Storage';
import AddBreak from '../AddBreak/AddBreak';
import Cart from '../Cart/Cart';
import Profle from '../Profile/Profle';
import './Activity.css'
import ActivityCard from './ActivityCard';


const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [breakCart, setBreakCart] = useState([]);
    
    const [breaks, setBreaks] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);


    useEffect(()=>{
        fetch('break.json')
            .then(res => res.json())
            .then(data => setBreaks(data))

    }, [])

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
    const handleBreak = (addBreak) => {
        console.log(addBreak);
        const newBreakCart = [...breakCart, addBreak];
        setBreakCart(newBreakCart)

    }


    return (
        <div className='activity-container lg:ml-32 lg:mr-24 mb-32'>


            <div className='mr-15 grid gap-x-8 gap-y-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
           
           
                {
                    products.map(product => <ActivityCard
                        key={product.id}
                        product={product}
                        handleCard={handleCard}
                    ></ActivityCard>)
                }
            </div>

            <div className='ml-10 rounded-xl shadow-2xl bg-rose-300 h-1/2 sticky top-0'>
            

            <div className='mb-20'>
                    <Profle></Profle>
            </div>

                <h1 className='text-1xl font-bold mt-3 bg-slate-300 p-2 mx-3 rounded-2xl shadow-2xl p-4'>Add a break </h1>
                <div className='flex justify-evenly  text-1xl font-bold my-3 bg-slate-300 p-2 mx-3 rounded-2xl shadow-2xl p-4'>
                   
                   
                    {
                        breaks.map(addBreak => <AddBreak
                            key={addBreak.id}
                            addBreak={addBreak}
                            handleBreak={handleBreak}
                        ></AddBreak>)
                    }
            </div>
            
                <Cart cart={cart}
                breakCart = {breakCart}
                ></Cart>
            </div>
            </div>
            
            
           
           
           
            
    
       
    );
};

export default Activity;