import React from 'react';

const BusinessCard = ({ item }) => {
    const { icon, number, headline } = item
    return (
        <div className="card max-w-lg bg-gray-200 shadow-xl text-center">
            <div className="card-body">
                <span className='text-green-600'>{icon}</span>
                <p className='font-bold text-5xl'>{number}</p>
                <p className='font-bold text-2xl'>{headline}</p>
            </div>
        </div>
    );
};

export default BusinessCard;