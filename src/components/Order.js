import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';

const Order = (props) => {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-5 bg-gray-100 text-gray-600 text-sm'>
            <div>
                <p className='font-bold text-xs'>ORDER PLACED</p>
                <p>{moment.unix(props.timestamp).format('DD MMM YYYY')}</p>
            </div>

            <div>
                <p className='text-xs font-bold'>TOTAL</p>
                <p>
                    <Currency quantity={props.amount} currency='USD'/> - Next Day Delivery{' '}
                    <Currency quantity={props.amountShipping} currency='USD' />
                </p>
            </div>

            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>{props.items.length} {props.items.length > 1 ? 'items' : 'item'}</p>

            <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>ORDER # {props.id}</p>
        </div>

        <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-auto'>
                {props.images.map(image => (
                    <img src={image} className='h-20 object-contain sm:h-32' />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Order;
