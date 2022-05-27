import React from 'react';

const ManageProductRow = ({ product, index, handleDelete }) => {
    const {_id, name, minimumQuantity, availableQuantity, price} = product;
    console.log(_id);
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{minimumQuantity}</td>
            <td>{availableQuantity}</td>
            <td>${price}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error btn-xs text-white">Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductRow;