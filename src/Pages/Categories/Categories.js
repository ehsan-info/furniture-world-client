import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    // const products = useLoaderData();
    useEffect(() => {
        fetch(`https://furniture-world-server-delta.vercel.app/catCategories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    const gotCat = id => {
        fetch(`https://furniture-world-server-delta.vercel.app/categories/catproducts/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1'>
                    <ul className="menu p-4 w-80  text-base-content">
                        {
                            categories.map(category => <li><button onClick={() => gotCat(category._id)}>{category.category_title}</button></li>)
                        }
                    </ul>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {

                            products.map(product =>
                                <ProductCard key={product._id} product={product}></ProductCard>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;