import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const { name, image, description, minimumOrderQuantity, availableQuantity, price } = detail;

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])

    return (
        <div className='px-6'>
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
        </div>
    );
};

export default Purchase;