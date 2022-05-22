import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlag, faPersonCircleQuestion, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import BusinessCard from './BusinessCard';

const Business = () => {
    const business = [
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faFlag} />,
            number: '15+',
            headline: 'Countries'
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faUser} />,
            number: '550+',
            headline: 'Happy clients'
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faThumbsUp} />,
            number: '300+',
            headline: 'feedbacks'
        }
    ]
    return (
        <div>
            <h2 className="text-center font-bold text-6xl text-green-600 my-8">
                Millions business trusts us
            </h2>
            <p className='text-3xl text-center my-8'>Try to understand users expectation</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    business.map((item, index) => <BusinessCard
                        key={index}
                        item={item}
                    ></BusinessCard>)
                }
            </div>
            <div className='bg-gray-200 m-8 p-8 flex justify-between items-center'>
                <div className='lg:w-1/2 mr-8'>
                    <h2 className='text-3xl font-bold text-accent'>Have any questions about us or got a product request?</h2>
                    <p className='text-3xl mt-4'>Don't hesitate to contact us?</p>
                </div>
                <div className='lg:w-1/2 lg:flex justify-evenly w-full'>
                    <button class="btn btn-info md:block mb-5 mr-5 font-bold">Contact us</button>
                    <button class="btn btn-accent md:block font-bold">Give Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Business;