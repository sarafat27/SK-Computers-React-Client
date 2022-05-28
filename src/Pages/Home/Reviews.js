import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery(
        'reviews', () => fetch('https://rocky-reaches-51313.herokuapp.com/review', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-6'>
            <h2 className="text-center font-bold text-4xl text-green-600 my-8">
                Valuable reviews of our clients
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="card lg-w-mx bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-40 h-24 rounded">
                                    <img src="https://thumbs.dreamstime.com/b/time-review-words-clock-chalkboard-watch-concept-40009136.jpg" alt='' />
                                </div>
                            </div>
                            <h2 className="card-title font-bold text-green-400">{review.name}</h2>
                            <p className='text-white'>{review.review}</p>
                            <div>
                                {
                                    [...Array(parseInt(review.ratings)).keys()].map(number =>
                                        <span
                                            className='mr-2 text-green-400'
                                            key={number}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;