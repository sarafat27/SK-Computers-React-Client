import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault();
        const profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedIn: event.target.linkedIn.value,
        }
        fetch(`https://rocky-reaches-51313.herokuapp.com/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Thanks for updating your profile')
                    event.target.reset()
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>
                Update profile
            </h2>
            <div className='my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='education' placeholder='Educational background' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='location' placeholder='location' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='phone' placeholder='phone number' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='linkedIn' placeholder='Your linkedIn profile' className="input input-bordered w-full max-w-xs" required />
                    <input type="submit" value="Update" className="btn btn-dark w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;