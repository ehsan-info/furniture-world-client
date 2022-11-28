import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Shared/Loader/Loader';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteProduct = product => {
        console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Product ${product.product_name} Deleted  Successfully`)
                    refetch();
                }

            })
    }
    const handleProductStatus = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Changed to Sold Successfully');
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-3xl mb-4'>My Products: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Resale Price</th>
                            <th>Category</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product_name}</td>
                                <td>{product.resale_price}</td>
                                <td>{product.product_category}</td>
                                <td>{product?.available === 'available' ? <button onClick={() => handleProductStatus(product._id)} className='btn btn-xs btn-primary'>Sold</button> : <p className='text-success'>Sold</p>}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.product_name} it can not be undone`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}>
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;