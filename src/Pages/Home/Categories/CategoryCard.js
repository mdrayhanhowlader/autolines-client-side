import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_name, category_img, category_id } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <img className="h-52" src={category_img} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/categories/${category_id}`}>
            <div className="badge badge-outline">
              <p>Explore</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
