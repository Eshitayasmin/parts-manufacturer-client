import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L4K9BEVWhXs6BkDtxZWzN2Zc6QT8mV5Z8CG0E9mbm6pQqDkZqvhlN5u2Tm7usMaggrFWUHuAWYYquCGXOEikCq600d44HRWZM');

const Payment = () => {
    const { orderId } = useParams();
    const url = `http://localhost:5000/booking/${orderId}`;

    const { data: booking, isLoading } = useQuery(['booking', orderId], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:ml-96 mt-16'>
            <div>
                <div class="card w-50 max-w-lg bg-red-50 shadow-xl my-12">
                    <div class="card-body">
                        <h1 className='text-success text-xl font-bold'>Hello, {booking.name}</h1>
                        <h2 class="card-title">Please pay for: {booking.productName}</h2>
                        <p>Your order is pending</p>
                        <p>Please pay: <span className='text-blue-300 text-md'> ${booking.price}</span></p>
                    </div>
                </div>

                <div class="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-green-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm booking={booking}/>
                        </Elements>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;