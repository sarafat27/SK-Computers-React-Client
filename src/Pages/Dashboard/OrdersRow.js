import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrdersRow = ({ order, index, setDeleteProduct }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={order.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.product}</div>
                        <div className="text-sm opacity-50">{order.email}</div>
                    </div>
                </div>
            </td>
            <td>{order.quantity}</td>
            <td>{order.totalPrice}</td>
            <th>
                <label onClick={() => setDeleteProduct(order)} htmlFor="delete-modal">
                    <FontAwesomeIcon icon={faTrash} />
                </label>
            </th>
            <th><button className='btn btn-xs font-bold'>
                Pay
            </button></th>
        </tr>
    );
};

export default OrdersRow;