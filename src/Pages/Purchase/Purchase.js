import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PlaceOrder from './PlaceOrder';

const Purchase = () => {
    const { id } = useParams();

    const [productDetail, setProductDetail] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductDetail(data)
            });
    }, [id]);
    return (
        <div>
            <div className='bg-red-200 py-8 lg:py-24'>
                <div className="block lg:flex justify-around lg:w-1/2 rounded-md bg-base-100 shadow-xl mx-6 lg:mx-auto p-8 lg:p-12">
                    <div>
                        <img className='w-60 lg:w-96 h-48 lg:h-64' src={productDetail.img} alt="" />
                    </div>

                    <div className='text-justify lg:ml-12'>
                        <h2 className='text-2xl font-semibold text-red-400 mb-2'>{productDetail.name}</h2>
                        <p className='text-gray-500 mb-1'>{productDetail.description}</p>
                        <p className='text-xl font-medium mb-1'>Price: <span className='text-blue-600'> $ {productDetail.price} /pcs</span></p>
                        <p>Availability: <span className='text-blue-400 mb-1'>Available</span></p>
                        <p className='text-md font-medium mb-1'>Minimum Quantity: {productDetail.minimumQuantity} pcs</p>
                        <p className='font-medium text-md'>Available Quantity: {productDetail.availableQuantity} pcs</p>
                    </div>

                </div>
            </div>

            <PlaceOrder 
            productDetail={productDetail}
            ></PlaceOrder>


        </div>

    );
};

export default Purchase;