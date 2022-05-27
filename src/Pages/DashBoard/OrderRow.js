import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, index}) => {
    const {_id, name, productName, quantity} = order;

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
                   
                }
            })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <th>{name}</th>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td><button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error btn-xs text-white">Cancel</button></td>
      </tr>
    );
};

export default OrderRow;