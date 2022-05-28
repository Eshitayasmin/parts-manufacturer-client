import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center my-16 w-full h-screen'>
        <div className='w-11/12 lg:w-1/2 mx-4 lg:mx-auto'>
            <h1 className='text-2xl text-blue-400'>Name: Eshita Yasmin</h1>
            <h2 className='text-xl text-red-400'>Email: eshita.emc2k17@gmail.com</h2>
            <p className='text-md mb-4'>Education: I am studying in the final year of Zoology Department of Eden Women's College</p>
            <p className='text-purple-300 text-lg'>Projects:</p>
            <div>
                <ul>
                    <li>1. Live Site Link: <span className='text-blue-400'>https://ar-photography-73631.firebaseapp.com/</span></li>
                    <li>2. Live Site Link: <span className='text-blue-400'>https://ar-eighth-assignment.netlify.app/</span></li>
                    <li>3. Live Site Link: <span className='text-blue-400'>https://ar-sixth-assignment.netlify.app/</span></li>
                    
                </ul>
            </div>
        </div>
    </div>
    );
};

export default MyPortfolio;