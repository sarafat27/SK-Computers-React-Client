import React from 'react';

const Part = ({ part }) => {
    const { name, image, description, minimumOrderQuantity, availableQuantity, price } = part
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-44' src={image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>min order quantity: {minimumOrderQuantity}</p>
                <p className='font-bold'>available quantity: {availableQuantity}</p>
                <p className='font-bold'>price: {price}</p>
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-neutral">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;