import React from "react";
import { Link } from "react-router-dom";

const ShowingAllData = ({ data, serialNumber }) => {
  const { _id, name, toyName, price, quantity, category } = data;
  return (
    <tr>
      <td>{serialNumber}</td>
      <td>{name}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <Link className="btn bg-green-300 border-0">View Details</Link>
      </td>
    </tr>
  );
};

export default ShowingAllData;
