import React from 'react';

const ManageOrderRow = ({ order, index, handleDelete, setDeletingOrder}) => {
    const { name, productName, quantity } = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-error btn-xs text-white">Delete</label>
                </td>
        </tr>
    );
};


export default ManageOrderRow;