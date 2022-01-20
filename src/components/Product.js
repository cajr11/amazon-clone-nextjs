import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import primeLogo from '../images/prime-logo.png'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

const myLoader = ({ src }) => {
    return `https://fakestoreapi.com/img/${src}`
}

const Product = (props) => {
    const dispatch = useDispatch();
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    
    const [hasPrime] = useState(Math.random() < 0.5)
    
    const srcSplit = (props.image).split('/');
    const imgLast = srcSplit[srcSplit.length - 1]

    const addToBasketHandler = () => {
        const product = {
            id: props.id,
            title: props.title,
            price: props.price,
            description: props.description,
            category: props.category,
            image: props.image,
            rating,
            hasPrime
        }

        dispatch(addToBasket(product))
    }

    return (
        <div className='relative flex flex-col  m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{props.category}</p>

            <Image loader={myLoader} src={imgLast} height={200} width={200} objectFit='contain'/>

            <h4 className='my-3'>{props.title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, i) => <StarIcon key={i} className='h-5 text-yellow-500'/> )}
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

            <button onClick={addToBasketHandler}className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product;
