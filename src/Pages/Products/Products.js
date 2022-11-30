import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl text-black text-center my-4'>All Products: {products?.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCard key={product._key} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;