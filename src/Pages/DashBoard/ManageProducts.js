import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://limitless-basin-34615.herokuapp.com/product/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

   const handleDelete = id =>{
   
        fetch(`https://limitless-basin-34615.herokuapp.com/product/${id}`, {
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
                    setDeletingProduct(null);
    
                }
            })
    }
   
 

    return (
        <div>
            
            <div className="overflow-x-auto lg:my-8">
                <table className="table w-full max-w-md">

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
                                setDeletingProduct={setDeletingProduct}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingProduct && <ProductDeleteModal 
                handleDelete={handleDelete}
                deletingProduct={deletingProduct}
                ></ProductDeleteModal>
            }

        </div>
    );
};

export default ManageProducts;