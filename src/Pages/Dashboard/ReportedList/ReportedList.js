import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../../Shared/Loader/Loader';

const ReportedList = () => {
    const { user } = useContext(AuthContext);
    const [deletingReport, setDeletingReport] = useState(null);
    const closeModal = () => {
        setDeletingReport(null);
    }

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/reports`, {
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
    const handleDeleteReport = user => {
        console.log(user);
        fetch(`http://localhost:5000/reports/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Report ${user.name} Deleted  Successfully`)
                    refetch();
                }

            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-3xl mb-4'>All Report: {reports?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Phone</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reports.length > 0 ?
                                reports.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.buyer_name}</td>
                                    <td>{user.buyer_email}</td>
                                    <td>{user.buyer_phone}</td>
                                    <td>{user.product_name}</td>
                                    <td>{user.product_price}</td>
                                    <td>{user.reason}</td>
                                    <td>
                                        <label onClick={() => setDeletingReport(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                                : <div><h2>No Report Available</h2></div>
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingReport &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete this report it can not be undone`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleDeleteReport}
                    modalData={deletingReport}>
                </ConfirmationModal>
            }
        </div>
    );
};

export default ReportedList;