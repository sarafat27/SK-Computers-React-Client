import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    const contact = [
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faPhone} />,
            medium: 'Phone',
            item: '01828288282'
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faMapMarkerAlt} />,
            medium: 'Address',
            item: '164,finix road,bashundara,dhaka'
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faMailBulk} />,
            medium: 'Email',
            item: 'sk.computers@gmail.com'
        }
    ]
    return (
        <div className='px-6'>
            <h2 className="text-5xl font-bold text-center text-green-600">
                Contact us
            </h2>
            <p className="text-center text-2xl my-3">
                Fill free to contact with us
            </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    contact.map((element, index) => <div
                        key={index}
                        class="card lg-w-mx bg-gray-200 shadow-xl rounded-full text-center">
                        <div class="card-body">
                            <span className='text-green-600'>{element.icon}</span>
                            <p className='font-bold text-5xl'>{element.medium}</p>
                            <p className='font-bold text-2xl'>{element.item}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Contact;