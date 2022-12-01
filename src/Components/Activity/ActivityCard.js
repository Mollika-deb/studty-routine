import React from 'react';

const ActivityCard = ({product, handleCard}) => {
    const { img_url, img_title, description, time } = product
    return (
        <div className="card w-96  bg-base-200 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img_url} alt="Shoes" className="rounded-xl h-64 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold text-green-700">{img_title}</h2>
                <p className='font-bold'>{description.slice(0, 50)}..</p>
                <p className='bg-red-400 p-3 font-bold text-white rounded-xl'>Study time: {time}</p>
                <div className="card-actions">
                    <button onClick={()=> handleCard(product)} className="btn  bg-green-700 w-64">Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;