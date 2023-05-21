import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const UpdateMyToys = () => {
    const {user} = useContext(AuthContext);
  const data = useLoaderData();
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

  const updateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const dollUpdateData = {
      name,
      email,
      toyName,
      price,
      rating,
      quantity,
      category,
      photoURL,
      details
    };
    console.log(dollUpdateData);

    fetch(`https://shopdisney-server-production.up.railway.app/addCollection/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dollUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "success!",
          text: "Doll Item Updated",
          icon: "Update",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div>
      <h1 className="text-center mb-10">
        <span className="font-bold text-3xl text-green-300">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">Update Data</span>
      </h1>
      <div className="bg-green-300 md:p-20 p-10 mb-20 rounded-lg">
        <form onSubmit={updateHandler} className=" rounded">
          <div className="md:flex md:justify-around">
            <div className="">
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user?.name}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Toy Name
                </label>
                <input
                  type="text"
                  id="chef"
                  name="toyName"
                  placeholder="Toy Name"
                  defaultValue={toyName}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="supplier"
                  name="email"
                  defaultValue={user?.email}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Details Description
                </label>
                <textarea
                  type="text"
                  id="Details"
                  name="details"
                  defaultValue={details}
                  placeholder="details"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="">
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Sub-Category
                </label>
                <input
                  type="category"
                  id="category"
                  name="category"
                  defaultValue={category}
                  placeholder="category"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Price
                </label>
                <input
                  type="price"
                  id="price"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Rating
                </label>
                <input
                  id="rating"
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  className="w-full p-2 border rounded-md"
                ></input>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Available Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="quantity"
                  className="w-full p-2 border rounded-md"
                ></input>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Photo URL
                </label>
                <input
                  type="photoURL"
                  id="photoURL"
                  name="photoURL"
                  defaultValue={photoURL}
                  placeholder="Doll photo"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 text-center">
            <button type="submit" className="btn btn-outline w-1/4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToys;
