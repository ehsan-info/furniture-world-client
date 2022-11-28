import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { category_title } = category;
    return (
        <div className="card  bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{category_title}</h2>
                <div className="card-actions justify-end">
                    <Link to='/categories'><button className="btn">See All Category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;