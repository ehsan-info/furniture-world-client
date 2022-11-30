import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/homecategories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-secondary uppercase'>Categories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;