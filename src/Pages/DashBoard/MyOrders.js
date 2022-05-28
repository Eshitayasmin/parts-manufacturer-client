import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleDelete = id => {
       
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`order: ${id} is deleted`);
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        setDeletingOrder(null);
                      
                    }
                })
        
    }

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                   
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user]);
    return (
        <div>
            <div className="overflow-x-auto lg:my-12">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Transaction Id</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                handleDelete={handleDelete}
                                setDeletingOrder={setDeletingOrder}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>

            {deletingOrder && <DeleteConfirmModal 
            deletingOrder={deletingOrder}
            handleDelete={handleDelete}
           ></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;