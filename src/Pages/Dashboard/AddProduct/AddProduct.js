import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import Loader from '../../../Shared/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    // console.log(imageHostKey);
    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }
    })
    const handleAddProduct = data => {
        // console.log(data);
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const product = {
                        image: imgData.data.url,
                        product_name: data.product_name,
                        product_category: data.category,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        purchase_date: data.purchase_date,
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        seller_name: data.seller_name,
                        seller_email: data.seller_email,
                        phone_number: data.phone_number,
                        available: 'available',
                        advertised: 'advertised',
                        posted_date: new Date()

                    }

                    // console.log(imgData.data.url);
                    //save products to the database
                    fetch(`http://localhost:5000/addproduct`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.product_name} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add a Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Add Image</span></label>
                    <input type="file" {...register("image",
                        {
                            required: "Image is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text" {...register("product_name",
                        {
                            required: "Product Name is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.product_name && <p className='text-red-500'>{errors.product_name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select {...register("category", { required: "Category is Required" })} className="select select-bordered w-full max-w-xs">
                        <option disabled >Please Select a Category</option>
                        {
                            categories.map(category => <option key={category._id} defaultValue={category.category_title}>{category.category_title}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resale_price",
                        {
                            required: "Resale Price is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.resale_price && <p className='text-red-500'>{errors.resale_price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="text" {...register("original_price",
                        {
                            required: "Original Price is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.original_price && <p className='text-red-500'>{errors.original_price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Purchase Date</span></label>
                    <input type="date" {...register("purchase_date",
                        {
                            required: "Purchase Date is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.purchase_date && <p className='text-red-500'>{errors.purchase_date.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <select {...register("condition", { required: "Condition is Required" })} className="select select-bordered w-full max-w-xs">
                        <option disabled>Please Select Condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Description</span></label>
                    <input type="text" {...register("description")}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" {...register("location",
                        {
                            required: "Location is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input defaultValue={user?.displayName} type="text" {...register("seller-name")} className="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Seller Email</span></label>
                    <input type="email" defaultValue={user?.email}  {...register("seller_email")} className="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Phone Number</span></label>
                    <input type="text" {...register("phone_number",
                        {
                            required: "Phone Number is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.phone_number && <p className='text-red-500'>{errors.phone_number.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-8' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;