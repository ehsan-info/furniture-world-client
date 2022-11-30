import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../../Shared/Loader/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/orders/${user?.email}`, {
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
    });

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/orders/${product._id}`, {
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

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-3xl mb-4'>My Orders: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Location</th>
                            <th>Phone Number</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.length > 0 ?
                                products.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_price}</td>
                                    <td>{product.buyer_location}</td>
                                    <td>{product.buyer_phone}</td>
                                    <td>
                                        {
                                            product.product_price && !product.paid &&
                                            <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link>
                                        }
                                        {
                                            product.product_price && product.paid && <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                                : <div><h2>No Orders Available</h2></div>
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

export default MyOrders;