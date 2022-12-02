import React from 'react';

const AddBreak = ({addBreak, handleBreak}) => {
    const { break_time } = addBreak;
    
    return (
        <div>
            
            <div  className='flex justify-evenly rounded-xl bg-slate-200 p-4 '>
                <button onClick={() => handleBreak(addBreak)}>{break_time}</button>
                
            </div>
        </div>
    );
};

export default AddBreak;