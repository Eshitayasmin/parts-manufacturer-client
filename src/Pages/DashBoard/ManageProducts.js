import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

   const handleDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this Product?');

    if(proceed){
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`product: ${id} is deleted`);
                    refetch();
    
                }
            })
    }
   
   }

    return (
        <div>
            <h2>Manage All Products: {products.length}</h2>
            <div className="overflow-x-auto lg:my-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Name</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                index={index}
                                product={product}
                                handleDelete={handleDelete}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;