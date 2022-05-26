import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageOrdersRow from './ManageOrdersRow';

const ManageOrders = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: allOrders, isLoading, refetch } = useQuery(
        'allOrders', () => fetch('http://localhost:5000/allOrders', {
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
            <h2 className='text-3xl text-center'>Manage all orders</h2>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>Total price</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <ManageOrdersRow
                                key={index}
                                index={index}
                                order={order}
                                setDeleteProduct={setDeleteProduct}
                            ></ManageOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteProduct
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                API='userProduct'
                refetch={refetch}
            ></DeleteProduct>}
        </div>
    );
};

export default ManageOrders;