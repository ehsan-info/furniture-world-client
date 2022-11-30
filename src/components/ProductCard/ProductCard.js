import React from 'react';

const ProductCard = ({ product }) => {
    const { image, product_name, product_category, resale_price, original_price, purchase_date, condition, description, location, seller_name, seller_email, phone_number, available, advertised, posted_date } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_name}
                    <div className="badge badge-secondary">{available}</div>
                </h2>
                <p>Resale Price: $<span>{resale_price}</span></p>
                <p>Original Price: $<span>{original_price}</span></p>
                <p>Purchase Date: <span>{purchase_date}</span></p>
                <p>Posted Date: <span>{posted_date}</span></p>
                <div className='flex justify-between'>
                    <div>
                        <p>Seller's Name: <span>{seller_name}</span></p>
                    </div>
                    <div>
                        <p>Verified tick mark</p>
                    </div>
                </div>
                {
                    available !== 'sold' ?
                        <button className="btn btn-primary">
                            Order Now
                        </button>
                        :
                        <button disabled className="btn btn-primary">
                            Already Sold
                        </button>
                }

            </div>
        </div>
    );
};

export default ProductCard;