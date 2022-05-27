import React from 'react';

const ManageOrderRow = ({ order, index, handleDelete, setDeletingOrder}) => {
    const { _id, name, productName, quantity } = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-outline btn-error btn-xs text-white">Delete</label>
                </td>
        </tr>
    );
};


export default ManageOrderRow;