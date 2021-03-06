import React from 'react';
import { toast } from 'react-toastify';

const ManageUserRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://rocky-reaches-51313.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className='btn btn-xs'>Already admin</button> :
                <button onClick={makeAdmin} className='btn btn-xs'>Make admin</button>}</td>
        </tr>
    );
};

export default ManageUserRow;