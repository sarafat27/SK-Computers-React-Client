import React from 'react';
import notFound from '../../images/notFound/notFound.png'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-red-500 my-3 text-center text-4xl font-bold'>Error Not found</h2>
            <img className='mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;