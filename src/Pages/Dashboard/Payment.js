import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1biWGwij1jAz0Mb5jZqSwHGYqNBgztpoNrzTRBsbX9ATWnyiEbJY4yCl5BSAiUEfX6f4xlB96mA8zJCZ4j3KPZ0067RYNeBu');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery(
        ['paymentOrder', id], () => fetch(url, {
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
        <div>
            <h2 className='text-3xl text-center mb-10'>payment page</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Please pay for <span className='text-blue-700 font-bold'>
                        {order.product}
                    </span></h2>
                    <p>Please pay <span className='text-blue-700 font-bold'>
                        {order.totalPrice}
                    </span> tk to confirm order</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;