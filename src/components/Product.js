import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import primeLogo from '../images/prime-logo.png'
import Image from 'next/image';

const MAX_RATING = 5;
const MIN_RATING = 1;

const myLoader = ({ src }) => {
    return `https://fakestoreapi.com/img/${src}`
}

const Product = (props) => {
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    
    const [hasPrime] = useState(Math.random() < 0.5)
    
    const srcSplit = (props.image).split('/');
    const imgLast = srcSplit[srcSplit.length - 1]

    return (
        <div className='relative flex flex-col  m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{props.category}</p>

            <Image loader={myLoader} src={imgLast} height={200} width={200} objectFit='contain'/>

            <h4 className='my-3'>{props.title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, i) => <StarIcon className='h-5 text-yellow-500'/> )}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{props.description}</p>

            <div className='mb-5'>
                <Currency quantity={props.price} currency='USD' />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <Image className='w-12' src={primeLogo} alt="" />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}

            <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product;
