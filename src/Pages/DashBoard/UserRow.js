import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch, index}) => {
    const { email, role } = user;
 
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    const handleRemoveUser = email => {
        const proceed = window.confirm('Are you sure you want to delete this user?');

      if(proceed){
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(` user: ${email} is deleted`);
                    refetch();
                }
            })
      }
    }

    return (
        <tr>
            <th>{index +1 }</th>
            <td>{email}</td>
            {
                role !== 'admin' ?
                    <td><button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button></td>
                    :
                    <td><button className="btn btn-xs btn-info text-white">Admin</button></td>
            }
            <td><button onClick={() => handleRemoveUser(email)} className="btn btn-outline btn-error btn-xs px-2 py-0">Remove User</button></td>
        </tr>
    );
};

export default UserRow;