import React from 'react';
import { Link } from 'react-router-dom';


const OrderRow = ({ order, index, setDeletingOrder}) => {
    const { _id, name, productName, quantity, paid, price, transactionId} = order;

 
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${price}</td>

            <td> { !paid 
            ?
            <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Payment</button></Link>
            :
             <button className='btn btn-xs btn-info text-white'>Paid</button>  
                }
            </td>
            <td>{transactionId && <p><span className='text-purple-400'>{transactionId}</span></p>}</td>
            <td>
            {
                !paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-error btn-xs text-white">Cancel</label>
            }
                </td>
        </tr>
    );
};

export default OrderRow;