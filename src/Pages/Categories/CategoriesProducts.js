import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const CategoriesProducts = () => {
    const [categories, setCategories] = useState([]);
    const [catProducts, setCatProducts] = useState([]);
    useEffect(() => {
        fetch(`https://furniture-world-server-delta.vercel.app/catCategories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    useEffect(() => {
        fetch(`https://furniture-world-server-delta.vercel.app/categories/catproducts/`)
            .then(res => res.json())
            .then(data => {
                setCatProducts(data);
            })
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1'>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/products'>All Category Products</Link></li>
                        {
                            categories.map(category => <li><button><Link to={`/categories/catproducts/${category._id}`}>{category.category_title}</Link></button></li>)
                        }
                    </ul>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {

                            catProducts.map(product =>
                                <ProductCard key={product._id} product={product}></ProductCard>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesProducts;