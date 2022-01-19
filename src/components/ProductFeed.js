import React from 'react'
import Product from './Product'

const ProductFeed = (props) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {props.products.map((prod) => <Product key={prod.id} title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price}/> )}
        </div>
    )
}

export default ProductFeed
