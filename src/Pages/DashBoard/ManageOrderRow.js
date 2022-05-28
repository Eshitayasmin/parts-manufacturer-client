import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, setDeletingOrder}) => {
    const { name, productName, quantity, price, paid, status, _id } = order;
    const [reload, setReload] = useState(false);

    const handleShipped = event =>{
        const status = "shipped";
        fetch(`https://limitless-basin-34615.herokuapp.com/booking/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({status}),
        })
            .then((res) => res.json())
            .then((data) => {
                setReload(!reload);
                toast.success('Order shipped');
                event.target.reset();
            });
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>{!paid ?  <button className='btn btn-xs btn-error text-white'>unpaid</button>
              :
            <button onClick={handleShipped} className='btn btn-xs btn-info text-white'>{status}</button>}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-error btn-xs text-white">Delete</label>
                </td>
        </tr>
    );
};


export default ManageOrderRow;