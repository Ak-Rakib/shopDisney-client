import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import Swal from "sweetalert2";

const ShowingMyToys = ({ data, users, setUsers }) => {
  useTitle("My-Toys");
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

  const deleteHandler = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if(result.isConfirmed) {
            fetch(`http://localhost:5000/addCollection/${_id}`, {
                method: "DELETE"
              })
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
        }

        const remaining = users.filter(doll => doll._id !== _id);
        setUsers(remaining);
    });
  };

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
        <Link onClick={() => deleteHandler(_id)} className="btn bg-green-300 border-0">
          Delete
        </Link>
        </td>
    </tr>
  );
};

export default ShowingMyToys;
