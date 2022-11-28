import React from 'react';

const AdvertisedProduct = ({ advertisedProduct }) => {
    const { _id, image, product_name, available, description, resale_price, original_price } = advertisedProduct;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='h-60'><img className='' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_name}
                    <div className="badge badge-secondary">{available}</div>
                </h2>
                <p>{description}</p>
                <div className="badge ">Resale Price:<span>${resale_price}</span></div>
                <div className="badge badge-outline">Original Price:<span>${original_price}</span></div>
            </div>
        </div>
    );
};

export default AdvertisedProduct;