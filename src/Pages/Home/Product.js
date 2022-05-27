import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const {_id, img, name, description, minimumQuantity, availableQuantity, price} = product;
  
  const handleBuyNow = (id) =>{
      navigate(`/purchase/${id}`)
  }
   
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='w-60 h-48' src={img} alt="Shoes" /></figure>
        <div className="card-body text-justify">
          <h2 className="text-2xl text-green-700">{name}</h2>
          <h3 className='text-blue-600 text-xl font-semibold'>Price: $ {price}</h3>
          <p className="text-justify text-gray-500">{description}</p>
          <p className='text-md font-medium'>Minimum Quantity: {minimumQuantity} pcs</p>
          <p className='text-md font-medium'>Available Quantity: {availableQuantity} pcs</p>
          
          <div className="card-actions mt-5">
          <button onClick={() => handleBuyNow(_id)} className=" bg-gray-600 btn btn-block btn-accent border-none text-white text-md">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;