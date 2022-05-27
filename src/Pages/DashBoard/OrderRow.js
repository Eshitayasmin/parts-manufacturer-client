import React from 'react';


const OrderRow = ({ order, index, handleDelete, setDeletingOrder}) => {
    const { _id, name, productName, quantity } = order;

 
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
            <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-error btn-xs text-white">Cancel</label>
                </td>
        </tr>
    );
};

export default OrderRow;