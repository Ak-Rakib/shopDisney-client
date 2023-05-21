import React from "react";
import { Link } from "react-router-dom";

const ShowingGallery = ({ doll }) => {
  const { picture, _id } = doll;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={picture}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <Link to={`/toys/${_id}`}>
            <button className="btn bg-green-300 border-0">
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowingGallery;
