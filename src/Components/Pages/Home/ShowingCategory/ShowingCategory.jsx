import React from "react";
import { Link } from "react-router-dom";

const ShowingCategory = ({ doll }) => {
  const { _id, picture, name, price, rating } = doll;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{'$'+price}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">{"Rating: "+rating}</div>
            <Link>
              <div className="btn btn-primary">View Details</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingCategory;
