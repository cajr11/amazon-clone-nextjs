import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router'

const Success = () => {
    const router = useRouter()

    const goToOrdersHandler = () => {
        router.push('/orders')
    }

  return( 
  <div className='bg-gray-100 h-screen'>
      <Header />

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white'>
            <div className='flex items-center space-x-2 mb-5'>
                <CheckCircleIcon className='text-green-500 h-10' />
                <h1 className='text-3xl'>
                    Thank you, your order has been confirmed!
                </h1>
            </div>
            <p>
                Thank you for shopping with us. An order confirmation has been sent to your email. Tracking details will be sent once your order(s) has been shipped. If you would like to check the status of your order, please click the link below.
            </p>
            <button onClick={goToOrdersHandler} className='button mt-8'>Go to my orders</button>
        </div>
      </main>
  </div>
  );
};

export default Success;


