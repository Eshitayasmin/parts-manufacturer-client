import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data => {
        const img = user?.photoURL;
        const addReview = {
            name: user?.displayName,
            review: data.review,
            rating: data.rating,
            img: img
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast.success('Review added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the review');
                }
            })


    };
    return (
        <div className='w-screen my-12'>
            <h4 className='text-blue-400 font-mono text-2xl lg:text-3xl lg:ml-96 px-4 mb-4'>Give Your Review Here</h4>
            <div className='w-10/12 lg:w-1/2 mx-4 lg:mx-auto'>
                <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Review' {...register("review")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' type='text' placeholder='Rating  out of 5' {...register("rating")} />
                    <button type='submit' className="btn w-96 max-w-sm">Add Review</button>
                </form>
            </div>
        </div>
    );
};
export default AddReview;