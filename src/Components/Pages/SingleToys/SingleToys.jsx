import React, { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SingleToys = () => {
  useTitle("Toy Details");
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { picture, name, price, rating, quantity, description } = data;

  return (
    <div className="mb-20 mt-20">
      <div className="card card-side bg-green-300 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{"Quantity: "+quantity}</p>
          <p>{"Rating: "+rating}</p>
          <p>{"$"+price}</p>
          <p>{"Details About Toy: "+description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;
