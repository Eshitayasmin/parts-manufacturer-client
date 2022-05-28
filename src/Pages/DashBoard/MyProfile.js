import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const addData = {
            name: user?.displayName,
            email: user?.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedIn: data.linkedIn
            
       
        }
        fetch('https://limitless-basin-34615.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast.success('data added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the data');
                }
            })
    };
    return (
        <div className='w-screen'>
            <div className='w-1/2 mx-auto mt-8'>
                <h1 className='text-2xl'>Name: <span className='text-2xl text-blue-500'>{user?.displayName}</span></h1>
                <h2 className='text-xl mb-4'>Email: <span className='text-xl text-purple-400 '>{user.email}</span></h2>
                <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Education' {...register("education")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' type='text' placeholder='Location' {...register("location")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' type='text' placeholder='Phone Number' {...register("phone")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' type='text' placeholder='LinkedIn profile link' {...register("linkedIn")} />
                    <button type='submit' className="btn w-96 max-w-sm">Add</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;