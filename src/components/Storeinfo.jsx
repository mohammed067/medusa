import React from 'react';

function Storeinfo({ products }) {
    return (
        <div>
            <h2>Product Information</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {products?.map((product) => (
                    <div key={product.id} className='p-4 border border-gray-300 rounded'>
                        <img className='w-full h-auto mb-2' src={product.images[0].url} alt={product.title} />
                        <p><strong>Product Name:</strong> {product.title}</p>
                        <p><strong>Price:</strong> {product.price}</p>
                        <p><strong>Product Description:</strong> {product.description}</p>
                        {/* Add more information as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Storeinfo;
