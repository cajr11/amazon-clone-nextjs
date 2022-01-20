import React from 'react'
import Product from './Product'
import discover from '../images/discover.jpeg'

const ProductFeed = (props) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {props.products.slice(0,4).map((prod) => <Product key={prod.id} id={prod.id} title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price}/> )}


            <img className="md:col-span-full" src={discover.src} alt='' />


           <div className='md:col-span-2'>
               {props.products.slice(4,5).map((prod) => <Product key={prod.id} id={prod.id} title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price}/>)}
            </div>


               {props.products.slice(5, props.products.length).map((prod) => <Product key={prod.id}  id={prod.id} title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price}/>)}
        </div>

    )
}

export default ProductFeed
