import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id, product } = deleteProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('This order is deleted successfully')
                    setDeleteProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {product}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error'>Delete</button>
                        <label for="delete-modal" className="btn btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;