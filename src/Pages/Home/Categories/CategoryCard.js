import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_name, category_img, category_id } = category;
  return (
    <div>
      <Link to={`/categories/${category_id}`}>
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <img
            className="h-52 rounded-t-lg"
            src={category_img}
            alt="categoryimage"
          />
          <div className="card-body">
            <div className="flex justify-between">
              {/* <h2 className="card-title">{category_name}</h2> */}
              <div className="card-actions justify-end">
                <Link to={`/categories/${category_id}`}>
                  <div className="badge badge-secondary p-4">
                    <p>EXPLORE {category_name}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
