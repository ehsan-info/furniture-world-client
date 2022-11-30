import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const products = useLoaderData();
    useEffect(() => {
        fetch(`http://localhost:5000/catCategories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1'>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/products'>All Category Products</Link></li>
                        {
                            categories.map(category => <li><button><Link to={`/${category._id}`}>{category.category_title}</Link></button></li>)
                        }
                    </ul>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            products.map(product =>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Name
                                            <div className="badge badge-secondary">Available</div>
                                        </h2>
                                        <p>Resale Price: $<span></span></p>
                                        <p>Original Price: $<span></span></p>
                                        <p>Purchase Date: $<span></span></p>
                                        <p>Posted Date: $<span></span></p>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p>Seller's Name: <span></span></p>
                                            </div>
                                            <div>
                                                <p>Verified tick mark</p>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary">Order Now</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;