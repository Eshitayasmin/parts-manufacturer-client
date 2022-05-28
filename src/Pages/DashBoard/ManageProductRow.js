import React from 'react';

const ManageProductRow = ({ product, index, setDeletingProduct }) => {
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
            <label onClick={() => setDeletingProduct(product)} for="product-delete-modal" className="btn btn-outline btn-error btn-xs text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductRow;