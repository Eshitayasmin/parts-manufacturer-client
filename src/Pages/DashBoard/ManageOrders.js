import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to want to delete this item?');
        if (proceed) {
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

                    }
                })
        }
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
            <div className="overflow-x-auto">
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
                                handleDelete={handleDelete}
                            ></ManageOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;