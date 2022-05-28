import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
        fetch('https://limitless-basin-34615.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, []);
    return (
        <div className='px-12 lg:px-24 py-8 bg-stone-100'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16'>
          {
                products?.slice(-6).map(product => <Product 
                  key={product._id} 
                  product={product}
                  ></Product>)
            }
          </div>
        </div>
    );
};

export default Products;