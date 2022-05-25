import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [imageData, setImageData] = useState({})
    const imgStorageKey = '4474e44b5e59db0655ad8ea558a3f62e'

    const handleImage = event => {
        const f = event.target.files
        setImageData(f[0]);
    }

    const handleSubmit = event => {
        event.preventDefault()
        const image = imageData;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: event.target.name.value,
                        image: img,
                        description: event.target.description.value,
                        minimumOrderQuantity: event.target.minimum.value,
                        availableQuantity: event.target.available.value,
                        price: event.target.price.value
                    }
                    //send to your database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                toast.success('Product added successfully');
                                event.target.reset()
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Add a product</h2>
            <div className='my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center'>
                    <input type="text" name='name' placeholder='product name' className="input input-bordered w-full max-w-xs" required />
                    <input onChange={handleImage} type="file" name='image' className="input input-bordered w-full max-w-xs" required />
                    <textarea className="textarea textarea-bordered w-80" name='description' placeholder="description" required></textarea>
                    <input type="text" name='price' placeholder='price' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='available' placeholder='available quantity' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='minimum' placeholder='minimum quantity' className="input input-bordered w-full max-w-xs" required />
                    <input type="submit" className="btn btn-dark w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;