import React from 'react';
import logo from './../../assets/logo.jpg';

const Profle = () => {
    return (
        <div>
            <div className='flex '>
                <img className='w-1/3 rounded-xl p-6' src={logo} alt="" />
                <h1 className='py-8 text-white font-bold ml-3'>Moutushi Mou</h1>
            </div>
            <div className='flex justify-evenly font-bold  bg-slate-300 p-3 mx-3 rounded-2xl shadow-2xl'>
            <div>
            <h1>49</h1>
            <h1 className='text-center'>Weight</h1>
            </div>
            <div>
            <h1>5.5</h1>
            <h1>Height</h1>
            </div>
            <div>
            <h1>23 </h1>
            <h1>Age</h1>
            </div>
            </div>
        </div>
    );
};

export default Profle;