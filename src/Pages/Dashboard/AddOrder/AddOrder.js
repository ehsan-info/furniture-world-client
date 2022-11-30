import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddOrder = () => {
    const products = useLoaderData();
    console.log(products);
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="p-7">
                <div className="">
                    <h3 className="text-lg font-bold"></h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='buyer_name' type="text" disabled value={user?.displayName} className="input w-full input-bordered" />
                        <input name='buyer_email' type="email" disabled value={user?.email} className="input w-full input-bordered" />
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input name='product_name' type="text" disabled value={products[0].product_name} className="input w-full input-bordered" />
                        <label className="label"><span className="label-text">Product Price</span></label>
                        <input name='product_price' type="text" disabled value={products[0].resale_price} className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full input-bordered" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;