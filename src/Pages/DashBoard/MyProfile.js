import React from 'react';

const MyProfile = () => {
    return (
        <div className='flex justify-center my-16'>
            <div>
                <h1 className='text-2xl text-blue-400'>Name: Eshita Yasmin</h1>
                <h2 className='text-xl text-red-400'>Email: eshita.emc2k17@gmail.com</h2>
                <p className='text-md mb-4'>Education: I am studying in the final year of Zoology Department of Eden Women's College</p>
                <p className='text-purple-300 text-lg'>Projects:</p>
                <div>
                    <ul>
                        <li>1. Live Site Link:</li>
                        <li>2. Live Site Link:</li>
                        <li>3. Live Site Link:</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;