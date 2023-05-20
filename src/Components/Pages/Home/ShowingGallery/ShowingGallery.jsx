import React from "react";

const ShowingGallery = ({ doll }) => {
  const { picture } = doll;
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
          {/* <h2 className="card-title">{name}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default ShowingGallery;
