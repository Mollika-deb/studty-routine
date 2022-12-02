import React from 'react';
import Activity from '../../Activity/Activity';
import icon from '../../../assets/icons.png'
import Blog from '../../Blog/Blog';

const Home = () => {
    return (
        <div className=''>
        <div className='ml-32 flex justy-center items-center text-green-700'>
                <img src={icon} alt="" />
                <h1 className='text-5xl font-bold text-center my-10'>Study Routine</h1>
        </div>
        <p className='text-2xl mb-10 ml-32 font-bold'>Select Today's study hour!!</p>
        
           <div>
                <Activity></Activity>
           </div>
           <div className='mr-32 ml-32 mb-32 bg-slate-100 shadow-2xl p-10'>
           <Blog></Blog>
           </div>
        </div>
    );
};

export default Home;