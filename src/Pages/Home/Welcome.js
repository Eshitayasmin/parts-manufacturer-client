import React from 'react';

const Welcome = () => {
    return (
        <div className='flex justify-center my-20 h-screen'>
            <div>
            <h1 className='text-2xl text-center text-info'>Your question has been sent!</h1>
            <h3 className='text-3xl text-center text-purple-500'>Thanks for contacting with us!!</h3>
            <p className='text-center text-md text-gray-500'>We will contact you very soon. Stay With Us...</p>
            </div>
        </div>
    );
};

export default Welcome;