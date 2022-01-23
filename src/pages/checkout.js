import React, { Fragment } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import primeDay from '../images/prime-day.png'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(publishableKey);

const Checkout = () => {
  const basketItems = useSelector(selectItems);

  const total = basketItems.map(item => item.price).reduce((item, iter) => iter + item, 0);

  const { data: session } = useSession();

  const checkoutHandler = async () => {
    const stripe = await stripePromise;

    // request to backend to create checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items: basketItems,
      email: session.user.email
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    });

    if(result.error) alert(result.error.message)

  }

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>

        {/* Left Section */}
        <div className='flex-grow m-5 shadow-sm'>
            <Image src={primeDay} height={250} width={1020} objectFit='contain'/>

            <div className='flex flex-col p-5 space-y-10 bg-white'>
              <h1 className='text-3xl border-b pb-4'> 
                {basketItems.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping basket'}
              </h1>

              {basketItems.map( (item, i) => (
                <CheckoutProduct key={i} id={item.id} title={item.title} price={item.price} rating={item.rating} description={item.description} category={item.category} image={item.image} hasPrime={item.hasPrime} />
              ))}

            </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {basketItems.length > 0 && (
            <Fragment>
              <h2 className='whitespace-nowrap'>Subtotal ({basketItems.length} items!)
                <span className='font-bold ml-2'>
                  <Currency quantity={total} currency='USD'/>
                </span>
              </h2>

              <button onClick={checkoutHandler} role='link' disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </Fragment>
          )}
        </div>
      </main>
  </div>
  );
};

export default Checkout;
