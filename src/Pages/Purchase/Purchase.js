import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const { name, image, description, minimumOrderQuantity, availableQuantity, price } = detail;
    const [user] = useAuthState(auth);
    const [totalPrice, setTotalPrice] = useState('');
    const [quantityError, setQuantityError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDetail(data))
    }, []);

    const handleQuantity = event => {
        const quantity = event.target.value;
        if (quantity < minimumOrderQuantity) {
            setQuantityError('Quantity can not be lower than minimum quantity')
        }
        else if (quantity > availableQuantity) {
            setQuantityError('Quantity can not be higher than available quantity')
        }
        else {
            setQuantityError('')
        }
        setTotalPrice(quantity * price)
    }

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            product: name,
            email: user.email,
            quantity: event.target.quantity.value,
            totalPrice,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('Your order is processing.please pay to confirm.')
                }
                else {
                    toast.error('There is an error in your order')
                }
            })
    }

    return (
        <div className='p-6'>
            <div class="card bg-base-200 shadow-xl">
                <figure><img className='w-44' src={image} alt="Album" /></figure>
                <div class="card-body text-center">
                    <h2 class="text-3xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>min order quantity: {minimumOrderQuantity}</p>
                    <p className='font-bold'>available quantity: {availableQuantity}</p>
                    <p className='font-bold'>price: {price}</p>
                </div>
            </div>
            <div className='my-10'>
                <h3 className="font-bold text-lg text-secondary mb-3 text-center">Booking for: {name}</h3>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-5 justify-items-center'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" required />
                    {quantityError && <p className='text-red-500'><small>{quantityError}</small></p>}
                    <input onChange={handleQuantity} type="text" name='quantity' placeholder="quantity" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='totalPrice' placeholder="total Price" value={totalPrice} readOnly className="input input-bordered w-full max-w-xs" />
                    {quantityError ? <input type="submit" disabled placeholder="submit" className="btn btn-secondary w-full max-w-xs" /> :
                        <input type="submit" placeholder="submit" className="btn btn-secondary w-full max-w-xs" />}
                </form>
            </div>
        </div>
    );
};

export default Purchase;