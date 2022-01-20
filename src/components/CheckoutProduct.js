import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import primeLogo from '../images/prime-logo.png';
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const myLoader = ({ src }) => {
    return `https://fakestoreapi.com/img/${src}`
}


const CheckoutProduct = (props) => {
  const dispatch = useDispatch()
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
        rating: props.rating,
        hasPrime: props.hasPrime
    }
    dispatch(addToBasket(product))
  }

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket( props.id ))
  }

  return (
    <div className='grid grid-cols-5'>
        <Image loader={myLoader} src={imgLast} height={200} width={200} objectFit='contain'/>

        <div className='col-span-3 mx-5'>
          <p>{props.title}</p>

          <div className='flex'>
            {Array(props.rating).fill().map((_, i) => <StarIcon key={i} className='h-5 text-yellow-500'/> )}
          </div>

          <p className='text-xs my-2 line-clamp-3'>{props.description}</p>

          <Currency quantity={props.price} currency="USD" />

          {props.hasPrime && <div className='flex items-center space-x-2'>
            <img loading='lazy' className='w-12' src={primeLogo.src}/>
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>}
        </div>

        {/* Add & Remove buttons */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
          <button className='button' onClick={addToBasketHandler}>Add to Basket</button>
          <button className='button' onClick={removeFromBasketHandler}>Remove from Basket</button>
        </div>
    </div>
  );
};

export default CheckoutProduct;
