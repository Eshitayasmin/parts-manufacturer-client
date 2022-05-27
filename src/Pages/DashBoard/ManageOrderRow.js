import React from 'react';

const ManageOrderRow = ({ order, index, handleDelete }) => {
    const { _id, name, productName, quantity } = order;

 
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error btn-xs text-white">Delete</button></td>
        </tr>
    );
};


export default ManageOrderRow;