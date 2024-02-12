import React from 'react'
import { useProducts } from "medusa-react"
import Storeinfo from './Storeinfo'

function Store() {
    const { products, isLoading } = useProducts()
    console.log(useProducts)
    
    return (
        <div>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>
                        {product.images[0].created_at}
                        <img src={product.images[0].url} alt={product.name} />
                    </li>
                ))}
            </ul>
            {/* <Storeinfo products={products} /> */}
        </div>
    )
}

export default Store;
