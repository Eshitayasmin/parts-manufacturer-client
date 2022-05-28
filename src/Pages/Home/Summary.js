import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faComments, faFlag } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Summary = () => {
    return (
       <div className='bg-yellow-100 my-16 py-12'>
           <h1 className='text-3xl lg:text-4xl text-center text-green-500 font-serif font-medium pb-8'>Our Busines Summary</h1>
            <div className='mx-12 grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-8'>
            <div className='w-full'>
         
                <div className='text-blue-400 text-center mb-3'><FontAwesomeIcon icon={faFlag} size="3x" /></div>
                <p className='text-4xl lg:text-5xl text-center font-semibold mb-2'>47+</p>
                <p className='text-2xl text-center text-purple-400 font-medium'>Countries</p>
            </div>
         
            <div>
                <div className='text-blue-400 text-center mb-3'><FontAwesomeIcon icon={faPeopleGroup} size="3x" /></div>
                <p className='text-4xl lg:text-5xl font-semibold text-center mb-2'>78K+</p>
                <p className='text-2xl text-center text-purple-500 font-medium'>Customers</p>
            </div>
          
            <div>
                <div className='text-blue-400 text-center mb-3'><FontAwesomeIcon icon={faComments} size="3x"/></div>
                <p className='text-4xl lg:text-5xl font-semibold text-center mb-2'>12K+</p>
                <p className='text-2xl text-center text-purple-500 font-medium'>FeedBacks</p>
            </div>
         
            
         
            <div>
                <div className='flex justify-center mb-3'><img className='w-14' src="https://www.seekpng.com/png/full/304-3048401_product-relationship-manager-product-life-cycle-icon.png" alt="" /></div>
                <p className='text-4xl lg:text-5xl font-semibold text-center mb-2'>17k+</p>
                <p className='text-2xl text-center text-purple-500 font-medium'>Products</p>
            </div>
           
        </div>
       </div>
    );
};

export default Summary;