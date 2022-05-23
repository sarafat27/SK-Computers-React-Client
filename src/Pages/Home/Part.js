import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, image, description, minimumOrderQuantity, availableQuantity, price } = part;
    const navigate = useNavigate()

    const handleBook = () => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl">
            <figure><img className='w-44' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>min order quantity: {minimumOrderQuantity}</p>
                <p className='font-bold'>available quantity: {availableQuantity}</p>
                <p className='font-bold'>price: {price}</p>
                <div className="card-actions justify-end mt-4">
                    <button onClick={handleBook} className="btn btn-neutral">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;