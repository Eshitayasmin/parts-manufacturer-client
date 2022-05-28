import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://limitless-basin-34615.herokuapp.com/review/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
      <div className='my-8 lg:my-16 py-8 bg-orange-100'>
            <div className='mx-4 lg:mx-24'>
            <h1 className='text-3xl text-blue-500 text-center font-sans mb-4'>Our Customer Review</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8'>
           {
                reviews?.map(review => <Review 
                    key={review._id}
                    user={review}></Review>)
            }
           </div>
        </div>
      </div>
    );
};

export default Reviews;