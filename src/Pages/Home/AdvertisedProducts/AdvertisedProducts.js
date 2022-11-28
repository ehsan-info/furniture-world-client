import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertisedProduct from './AdvertisedProduct';

const AdvertisedProducts = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/advertisedproducts`)
            .then(res => res.json())
            .then(data => {
                setAdvertisedProducts(data);
            })
    }, []);
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-secondary uppercase'>Advertised || Available <br />Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    advertisedProducts.map(advertisedProduct => <AdvertisedProduct key={advertisedProduct._id} advertisedProduct={advertisedProduct}></AdvertisedProduct>)
                }
            </div>
            <Link to='/categories' className='flex justify-center my-5'><button className="btn btn-primary">Click to See All Category</button></Link>
        </div>
    );
};

export default AdvertisedProducts;