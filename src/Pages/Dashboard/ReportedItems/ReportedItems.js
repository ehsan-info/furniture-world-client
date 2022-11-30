import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ReportedItems = () => {
    const products = useLoaderData();
    console.log(products);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleReport = event => {
        event.preventDefault();
        const form = event.target;
        const buyer_name = form.buyer_name.value;
        const buyer_email = form.buyer_email.value;
        const product_name = form.product_name.value;
        const product_price = form.product_price.value;
        const buyer_phone = form.phone.value;
        const reason = form.reason.value;
        const report = {
            buyer_name,
            buyer_email,
            product_name,
            product_price,
            buyer_phone,
            reason
        }
        fetch('http://localhost:5000/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Report Created Confirmed');
                    navigate('/products');
                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            <div className="p-7">
                <div className="">
                    <h3 className="text-lg font-bold"></h3>
                    <form onSubmit={handleReport} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='buyer_name' type="text" disabled value={user?.displayName} className="input w-full input-bordered" />
                        <input name='buyer_email' type="email" disabled value={user?.email} className="input w-full input-bordered" />
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input name='product_name' type="text" disabled value={products[0].product_name} className="input w-full input-bordered" />
                        <label className="label"><span className="label-text">Product Price</span></label>
                        <input name='product_price' type="text" disabled value={products[0].resale_price} className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='reason' type="text" placeholder="Write a report" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full input-bordered" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportedItems;