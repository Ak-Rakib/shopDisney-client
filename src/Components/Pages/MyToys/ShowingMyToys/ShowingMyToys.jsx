import React from "react";
import { Link } from "react-router-dom";

const ShowingMyToys = ({ data }) => {
  const {
    _id,
    name,
    email,
    toyName,
    price,
    rating,
    quantity,
    category,
    photoURL,
    details,
  } = data;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{toyName}</td>
      <td>{quantity}</td>
      <td>{category}</td>
      <td>{details}</td>
      <td>{rating}</td>
      <td>{"$" + price}</td>
      <td>
        <Link className="btn bg-green-300 border-0">
          Edit
        </Link>
        </td>
      <td>
        <Link className="btn bg-green-300 border-0">
          Delete
        </Link>
        </td>
    </tr>
  );
};

export default ShowingMyToys;
