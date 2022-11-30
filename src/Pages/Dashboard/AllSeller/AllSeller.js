import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../../Shared/Loader/Loader';

const AllSeller = () => {
    const { user } = useContext(AuthContext);
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/allseller`, {
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
    const handleDeleteUser = user => {
        console.log(user);
        fetch(`http://localhost:5000/allseller/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`User ${user.name} Deleted  Successfully`)
                    refetch();
                }

            })
    }
    const handleVerify = (id, status) => {
        const state = { status };
        console.log(state);
        fetch(`http://localhost:5000/allseller/status/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`Changed Status of a User`);
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-3xl mb-4'>All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Status</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.length > 0 ?
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.status !== 'unverified' ? <button onClick={() => handleVerify(user._id, 'unverified')} className='btn btn-xs btn-primary'>{user.status}</button> : <button onClick={() => handleVerify(user._id, 'verified')} className='btn btn-xs btn-primary'>{user.status}</button>}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                                : <div><h2>No User Available</h2></div>
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name} it can not be undone`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleDeleteUser}
                    modalData={deletingUser}>
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSeller;