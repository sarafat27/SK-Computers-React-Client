import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault();
        const myReview = {
            name: user.displayName,
            email: user.email,
            review: event.target.reviewText.value,
            ratings: event.target.star.value
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Thanks for your valuable review')
                    event.target.reset()
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Add review</h2>
            <div className='my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <textarea className="textarea textarea-bordered w-80" name='reviewText' placeholder="your review" required></textarea>
                    <input type="text" name='star' placeholder='how many star out of 5?' className="input input-bordered w-full max-w-xs" required />
                    <input type="submit" className="btn btn-dark w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;