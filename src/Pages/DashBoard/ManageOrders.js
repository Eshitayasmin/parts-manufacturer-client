import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
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
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining);
                        setDeletingOrder(null);

                    }
                })
        }
    

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setManageOrders(data)
                })
        }
    }, [user]);
    return (
        <div>
            <div className="overflow-x-auto lg:my-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            manageOrders.map((order, index) => <ManageOrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                setDeletingOrder={setDeletingOrder}
                            ></ManageOrderRow>)
                        }

                    </tbody>
                </table>
            </div>

            {deletingOrder && <DeleteConfirmModal 
            deletingOrder={deletingOrder}
           ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageOrders;