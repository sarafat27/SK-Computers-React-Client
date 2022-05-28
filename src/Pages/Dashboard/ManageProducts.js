import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery(
        'products', () => fetch('https://rocky-reaches-51313.herokuapp.com/products', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl text-center'>Manage all products</h2>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Available quantity</th>
                            <th>price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductsRow
                                key={index}
                                index={index}
                                product={product}
                                setDeleteProduct={setDeleteProduct}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteProduct
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                API='adminProduct'
                refetch={refetch}
            ></DeleteProduct>}
        </div>
    );
};

export default ManageProducts;