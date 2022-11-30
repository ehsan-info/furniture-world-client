import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/catCategories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/products'>All Category Products</Link></li>
                        {
                            categories.map(category => <li><button><Link to={`/${category.category_title}`}>{category.category_title}</Link></button></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;