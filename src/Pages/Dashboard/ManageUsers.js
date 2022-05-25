import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageUserRow from './ManageUserRow';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery(
        'users', () => fetch('http://localhost:5000/user', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-center">All users: </h2>
            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <ManageUserRow
                                index={index}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></ManageUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;