import React from 'react';
import Activity from '../../Activity/Activity';
import icon from '../../../assets/icons.png'

const Home = () => {
    return (
        <div className=''>
        <div className='ml-32 flex justy-center items-center text-green-700'>
                <img src={icon} alt="" />
                <h1 className='text-5xl font-bold text-center my-10'>Study Routine</h1>
        </div>
        <p className='text-2xl mb-10 ml-32 font-bold'>Select Today's study hour!!</p>
        
            <Activity></Activity>
        </div>
    );
};

export default Home;